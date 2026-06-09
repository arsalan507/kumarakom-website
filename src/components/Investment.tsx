import { Reveal } from "./Reveal";
import { MaskHeading } from "./MaskHeading";

const BENCHMARKS = [
  { label: "ITC Zuri Kumarakom — 18 acres", value: "₹11.39 Cr/ac" },
  { label: "Purity, Vembanad Lake — 2.5 acres", value: "₹12.80 Cr/ac" },
  { label: "Waterfront baseline (Vembanad)", value: "₹11–13 Cr/ac" },
  { label: "Price per room (luxury segment)", value: "₹2.29–2.85 Cr" },
  { label: "GOP margin — operated hotel", value: "33–34%" },
  { label: "Operator revenue share (rooms)", value: "15–25%" },
  { label: "Previous operator: avg. occupancy", value: "Near 100%" },
];

const SCENARIOS = [
  {
    keys: "28",
    label: "Current Inventory",
    y1: "₹5.96 Crore",
    y10: "₹9.18 Crore",
    occ: "65%",
    adr: "₹6,500",
    gop: "33.4%",
    highlight: false,
  },
  {
    keys: "78",
    label: "Expanded Inventory",
    y1: "₹15.22 Crore",
    y10: "₹23.45 Crore",
    occ: "62%",
    adr: "₹6,500",
    gop: "33.4%",
    highlight: true,
  },
  {
    keys: "100",
    label: "Maximum Scale",
    y1: "₹18.01 Crore",
    y10: "₹27.74 Crore",
    occ: "55%",
    adr: "₹6,500",
    gop: "34.4%",
    highlight: false,
  },
];

export function Investment() {
  return (
    <section id="investment" className="tone-ivory relative">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-28 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left — narrative */}
          <div>
            <Reveal>
              <span className="eyebrow">Investment Opportunity</span>
            </Reveal>
            <h2 className="h-display text-[clamp(2.2rem,4.5vw,3.6rem)] mt-8">
              <MaskHeading as="span" className="block">
                A Generational
              </MaskHeading>
              <MaskHeading as="span" delay={1} className="block">
                <em>Waterfront Asset</em>
              </MaskHeading>
            </h2>
            <Reveal delay={200}>
              <span className="rule-gold mt-8" />
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-10 space-y-5 body-text">
                <p>
                  The Kerala backwater luxury segment has established a clear market
                  rate: ₹11–13 crore per acre for Vembanad lakefront land, benchmarked
                  by ITC&rsquo;s acquisition of the Zuri Kumarakom at ₹11.39 Cr/acre
                  and the Apeejay Surrendra Park Hotels transaction at ₹12.8 Cr/acre
                  for Vembanad waterfront in 2024–26.
                </p>
                <p>
                  This property — 14.41 acres, 900 feet of water frontage, fully
                  built, licensed, and previously operated to near-full occupancy —
                  represents a compelling entry into one of India&rsquo;s most
                  consistently performing hospitality markets, with meaningful upside
                  from expansion and operator partnership.
                </p>
                <p>
                  Three revenue scenarios have been modelled with major operators who
                  have expressed formal interest in the property. All scenarios
                  maintain a gross operating margin of approximately 33–34%.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right — benchmarks panel (deep ink inside ivory section for contrast) */}
          <div>
            <Reveal delay={120}>
              <div
                className="p-7 lg:p-9 h-full"
                style={{
                  background: "var(--ink)",
                  border: "1px solid var(--ink)",
                  color: "var(--ivory)",
                }}
              >
                <p className="text-[0.72rem] tracking-[0.22em] uppercase text-brass-light mb-7 leading-relaxed">
                  Market Context — Kerala
                  <br />
                  Waterfront Benchmarks (2024–26)
                </p>
                <ul className="divide-y" style={{ borderColor: "rgba(242,235,222,0.12)" }}>
                  {BENCHMARKS.map((b) => (
                    <li
                      key={b.label}
                      className="flex justify-between items-baseline py-4 gap-6 border-t border-[rgba(242,235,222,0.12)] first:border-t-0"
                    >
                      <span className="text-cream/80 text-[0.9rem] leading-snug">
                        {b.label}
                      </span>
                      <span className="font-display text-brass-light text-[1.05rem] whitespace-nowrap">
                        {b.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Revenue scenarios */}
        <div className="mt-24 lg:mt-32">
          <Reveal>
            <span className="eyebrow">Revenue Projections</span>
          </Reveal>
          <h3 className="h-display text-[clamp(1.8rem,3.6vw,2.6rem)] mt-6">
            <MaskHeading as="span" className="block">
              Three Growth Scenarios — <em>10-Year Modelled</em>
            </MaskHeading>
          </h3>

          <div
            className="mt-12 grid md:grid-cols-3 gap-px border"
            style={{
              borderColor: "var(--rule-strong)",
              background: "var(--rule-strong)",
            }}
          >
            {SCENARIOS.map((s, i) => (
              <Reveal key={s.keys} delay={i * 120}>
                <div
                  className="p-7 lg:p-9 h-full relative"
                  style={{
                    background: s.highlight ? "var(--ink)" : "var(--char)",
                    color: "var(--ivory)",
                  }}
                >
                  {s.highlight && (
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 text-[0.62rem] tracking-[0.2em] uppercase font-semibold px-3 py-1.5"
                      style={{ background: "var(--brass)", color: "var(--ivory-pure)" }}
                    >
                      Optimal Scale
                    </span>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-brass-light text-[clamp(3rem,5.5vw,4.5rem)] leading-none">
                      {s.keys}
                    </span>
                  </div>
                  <p
                    className="text-[0.7rem] tracking-[0.22em] uppercase mt-2 mb-8"
                    style={{ color: "rgba(242,235,222,0.55)" }}
                  >
                    Keys — {s.label}
                  </p>

                  <Row label="Y1 Total Revenue" value={s.y1} />
                  <Row label="Y10 Total Revenue" value={s.y10} />
                  <Row label="Y1 Occupancy" value={s.occ} />
                  <Row label="ADR (Starting)" value={s.adr} />

                  <div className="mt-7">
                    <span
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-[0.72rem] tracking-[0.18em] uppercase font-semibold border"
                      style={{
                        background: "rgba(138, 106, 59, 0.15)",
                        color: "var(--brass-light)",
                        borderColor: "rgba(138, 106, 59, 0.4)",
                      }}
                    >
                      GOP {s.gop}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Operator interest panel — anonymised */}
        <Reveal delay={200}>
          <div
            className="mt-16 p-7 lg:p-10 grid lg:grid-cols-[1fr_auto] gap-8 items-center"
            style={{
              border: "1px solid var(--rule-strong)",
              background: "var(--bg-card)",
            }}
          >
            <div>
              <p className="text-[0.72rem] tracking-[0.22em] uppercase text-brass mb-4">
                Operator Interest on Record
              </p>
              <p
                className="text-[0.95rem] leading-relaxed max-w-3xl"
                style={{ color: "var(--on-bg)" }}
              >
                Multiple premium and mid-premium hospitality operators have submitted
                formal term sheets, ranging from 15-year management contracts to
                25-year revenue-share leases. Revenue share models range from 15% to
                25% of room net revenue, with minimum guarantees from Year 2 onwards.
                Operator identities and full projections are shared with qualified
                parties following execution of a non-disclosure agreement.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <span className="pill italic font-display text-[0.85rem] tracking-[0.06em] capitalize">
                Premium · Operator A
              </span>
              <span className="pill italic font-display text-[0.85rem] tracking-[0.06em] capitalize">
                Mid-Premium · B
              </span>
              <span className="pill italic font-display text-[0.85rem] tracking-[0.06em] capitalize">
                Mid-Premium · C
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="py-3 border-t first:border-t-0"
      style={{ borderColor: "rgba(242,235,222,0.12)" }}
    >
      <p
        className="text-[0.65rem] tracking-[0.22em] uppercase mb-1"
        style={{ color: "rgba(242,235,222,0.55)" }}
      >
        {label}
      </p>
      <p className="font-display text-cream text-[1.4rem]">{value}</p>
    </div>
  );
}
