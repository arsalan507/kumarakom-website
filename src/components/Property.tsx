import { Reveal } from "./Reveal";
import { MaskHeading } from "./MaskHeading";
import { CountUp } from "./CountUp";

type Stat = {
  num: string;
  unit?: string;
  label: string;
  body: string;
};

const STATS: Stat[] = [
  {
    num: "14.41",
    unit: "ac",
    label: "Total Land Extent",
    body: "Largely rectangular, flat, Vembanad backwater-front parcel.",
  },
  {
    num: "900",
    unit: "ft",
    label: "Water Frontage",
    body: "Direct, uninterrupted access to the Vembanad backwater system.",
  },
  {
    num: "28",
    label: "Existing Cottages",
    body: "Expandable to 78 or 100 keys under existing FAR.",
  },
  {
    num: "2.5",
    label: "Permissible FSI",
    body: "Substantial development headroom on a 14.41-acre site.",
  },
  {
    num: "12+",
    label: "Licences in Place",
    body: "All approvals secured — waiting to be renewed.",
  },
  {
    num: "0",
    label: "Encumbrances",
    body: "Clear, marketable title. Nil EC. No disputes, no bank loans.",
  },
];

const LICENCES = [
  "Ownership Certificate",
  "Panchayat Resort Licence",
  "Hotel & Restaurant Licence",
  "Food Safety & Standards Act",
  "Pollution Control Board",
  "Shops & Establishment Act",
  "Beer & Wine Licence",
  "Lodging House Registration",
  "Ayurveda / Para Medical Centre",
  "TMC — Kumarakom",
  "Approved Layout Plan",
  "Panchayat Institute Permission",
  "Water & Rose Access",
];

const FACTS = [
  "Airport: 55 km from Kochi International Airport by road (approx 1.5 hrs)",
  "Railway Station: 25 km from Kottayam town (approx 30 min)",
  "Water & Road Access: 10 min boat ride to the property jetty or 800 m from the main road by vehicle",
];

export function Property() {
  return (
    <section id="property" className="tone-ink relative">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-28 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 lg:items-center">
          {/* Left — narrative + facts */}
          <div>
            <Reveal>
              <span className="eyebrow">The Estate</span>
            </Reveal>

            <h2 className="h-display text-[clamp(2.2rem,4.5vw,3.6rem)] mt-8">
              <MaskHeading as="span" className="block">
                Shimmering Backwaters
              </MaskHeading>
              <MaskHeading as="span" delay={1} className="block">
                and Nature&rsquo;s <em>Luxury</em>
              </MaskHeading>
            </h2>

            <Reveal delay={200}>
              <span className="rule-gold mt-8" />
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-8 space-y-5 body-text">
                <p>
                  Kumarakom — the famed backwaters of Kerala, where the waters
                  have meandered through history, between mythology and
                  colonialism, to present-day modern literature and the world
                  stage as a luxury destination.
                </p>
                <p>
                  In the midst of this convergence lies a{" "}
                  <strong>14.4-acre property</strong> where the pristine
                  backwaters intertwine through the entire estate — a landscape
                  that stills the mind and enchants the soul.
                </p>
                <p>
                  This unique property in the heart of Kumarakom, with a
                  conducive climate for Ayurveda treatments, is perfectly placed
                  to capture the booming wellness market in India.
                </p>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <ul className="mt-10 divide-y divide-[var(--rule)] border-t border-[var(--rule)]">
                {FACTS.map((f) => (
                  <li
                    key={f}
                    className="py-3.5 flex items-start gap-4 text-[0.92rem]"
                    style={{ color: "var(--on-bg)" }}
                  >
                    <span className="text-brass mt-2 text-[0.55rem]">◆</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right — stat-card grid */}
          <div>
            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((s) => (
                  <div key={s.label} className="stat-card">
                    <div className="flex items-baseline">
                      <CountUp value={s.num} className="stat-num" />
                      {s.unit && <span className="stat-unit">{s.unit}</span>}
                    </div>
                    <span className="stat-label">{s.label}</span>
                    <p className="stat-body">{s.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Licence marquee */}
        <Reveal delay={200}>
          <div className="mt-20 pt-10 border-t border-[var(--rule)]">
            <p className="font-sans text-[0.72rem] tracking-[0.22em] uppercase text-brass mb-8 flex items-center gap-4">
              <span className="rule-gold" />
              12+ Licences — Waiting to be Renewed
            </p>
          </div>
        </Reveal>

        {/* Full-bleed ticker */}
        <div className="marquee-wrap" aria-label="Licences in place">
          <div className="marquee-track">
            {[...LICENCES, ...LICENCES].map((l, i) => (
              <span
                key={i}
                className="pill shrink-0 whitespace-nowrap mx-3"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
