import Image from "next/image";
import { Reveal } from "./Reveal";
import { MaskHeading } from "./MaskHeading";

const PILLARS = [
  {
    numeral: "I",
    label: "Pillar One",
    title: "Wellness & Ayurveda",
    image: "/resort-ayurveda.jpg",
    hook: "Kerala didn't manufacture wellness tourism. It continued what it had always been doing — for 3,000 years, on this same soil.",
    body: "The on-site Ayurveda centre, yoga pavilion, and licensed Ayurveda kitchen are not features added to attract guests. They are the continuation of a living tradition. The nucleus of a world-class wellness retreat — ready to operate from day one.",
    facts: [
      "Kerala Ayurveda & medical tourism: ₹13,500 Cr revenue in 2024 (25% YoY growth)",
      "Global wellness tourism: USD 945B (2024) → USD 2T by 2033 at 8.9% CAGR",
      "India wellness tourism: USD 28B (2025) → USD 43B by 2031",
      "South India commands 49.74% of India's wellness tourism market",
      "Kerala accredited Ayurveda centres: 460 (2023) → 550 (2024)",
      "3,500 sq.ft. on-site Ayurveda Centre, Yoga Pavilion & licensed kitchen — operational",
    ],
    source: "Source: Kerala Tourism Annual Report 2024; Global Wellness Institute",
  },
  {
    numeral: "II",
    label: "Pillar Two",
    title: "Sustainable Luxury",
    image: "/resort-garden.jpg",
    hook: "The finest properties in the world share one characteristic: the land still feels wild. Here, 14.41 acres absorbs 28 cottages without effort.",
    body: "Low-density design — 28 to 100 keys across 14.41 acres — ensures the guest-to-nature ratio that defines the finest experiential properties globally. The infrastructure exists. The architecture of restraint is already in place.",
    facts: [
      "India sustainable tourism: INR 329B (2023) → INR 2.24T by 2030 at 35.52% CAGR",
      "Global sustainable tourism: USD 3.23T (2024) → USD 11.53T by 2033",
      "Kerala identified as India's leading state in sustainable tourism development",
      "Global luxury travel: USD 2.26T (2024) → USD 4.24T by 2034",
      "28 cottages expandable to 78 or 100 keys under existing FAR",
      "Heritage architecture — zero demolition required",
    ],
    source: "Source: Kerala DTPC; Statista Global Luxury Travel Report 2024",
  },
  {
    numeral: "III",
    label: "Pillar Three",
    title: "Destination Weddings",
    image: "/resort-pool-night.jpg",
    hook: "900 feet of waterfront. A temple 1,800 years old, three minutes away. If there is a more sacred place in India to begin a marriage, we have not found it.",
    body: "A private 14.41-acre waterfront estate — with pool, heritage restaurant, open garden, and uninterrupted backwater frontage — is a category-defining wedding venue. India's destination wedding market is one of the fastest-growing hospitality segments. No comparable setting exists in Kumarakom.",
    facts: [
      "India destination wedding market: USD 16.25B (2024) → USD 55B by 2033 at 14.8% CAGR",
      "Global destination wedding market: USD 82.92B by 2030 at 14.7% CAGR",
      "Kerala & Goa: largest share of India's backwater wedding segment",
      "26% of Indian couples chose destination weddings in 2024 (up from 18% in 2022)",
      "Pool + heritage hall + open garden — complete venue on one private estate",
      "900 ft waterfront ceremony backdrop — unique in Kumarakom",
    ],
    source: "Source: FICCI-Yes Bank Wedding Industry Report 2024; Statista",
  },
  {
    numeral: "IV",
    label: "Pillar Four",
    title: "Ecotourism & Nature",
    image: "/resort-duck-canal.jpg",
    hook: "When the Siberian migratory birds arrive in August, Kumarakom stops being a destination and becomes a sanctuary. The guests who understand this travel 10,000 kilometres to be here.",
    body: "Vembanad — Kerala's largest backwater system, stretching 96 km — is the resort's front garden. The private canal running through the property supports live fish, rare migratory birds, and a backwater ecosystem found nowhere else. Nature is not the backdrop here. It is the product.",
    facts: [
      "India ecotourism: USD 14B (2024) → USD 41.5B by 2035 at 10.3% CAGR",
      "Kumarakom Bird Sanctuary: 180+ species across 14 acres on Vembanad",
      "Vembanad Lake — largest backwater system in Kerala, one of Asia's largest wetlands",
      "Kerala leads India's ecotourism sector — UNWTO Ulysses Award winner",
      "900 ft of direct Vembanad waterfront — boat jetty, kayak & coracle access",
      "Migratory season: Aug – Feb (peak international arrivals)",
    ],
    source: "Source: UNWTO Ecotourism Report 2024; Kerala Tourism Department",
  },
  {
    numeral: "V",
    label: "Pillar Five",
    title: "MICE & Incentive Tourism",
    image: "/mice-backwater.jpeg",
    hook: "Kochi is already a boardroom. Kumarakom is where the boardroom exhales. Ninety minutes separates India's fastest-growing MICE hub from a waterfront sanctuary no metro hotel can replicate.",
    body: "Delegates who convene in Kochi retreat to Kumarakom. Incentive groups bypass the city entirely and arrive directly at Vembanad. The estate's combination of private waterfront, heritage dining, Ayurveda, and absolute seclusion places it squarely in the highest-yield segment of the hospitality market — experiential MICE — where spend-per-delegate runs 2–3× the leisure average.",
    facts: [
      "India MICE market: USD 37.75B (2025) → USD 74.12B by 2031 at 11.92% CAGR",
      "Tier-II cities drive 35–40% of domestic MICE; Kochi & Kumarakom explicitly named as key hubs",
      "Kerala: India's #1 state — 94 five-star, 420 four-star, 607 three-star hotels",
      "MICE delegates spend 2–3× more than leisure tourists; incentive tourism growing 12–15% p.a.",
      "68% of Fortune 500 companies maintain dedicated MICE budgets; 310M professionals attend structured events annually",
      "Incentive sub-segment CAGR: 10.2% through 2033 — led by demand for experiential retreats",
    ],
    source: "Source: Mordor Intelligence; Grand View Research; Travel Trade Journal; Tornos News",
  },
];

export function Vision() {
  return (
    <section
      id="vision"
      className="tone-ink relative"
      style={{
        background:
          "linear-gradient(to bottom, var(--char) 0%, var(--ink) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-20 lg:py-40">

        {/* ── Mobile header (single line, above snap cards) ── */}
        <div className="lg:hidden mb-6">
          <Reveal>
            <span className="eyebrow">The Opportunity</span>
          </Reveal>
          <h2 className="h-display text-[clamp(2rem,7vw,3rem)] mt-5">
            <MaskHeading as="span" className="block">Opportunity</MaskHeading>
            <MaskHeading as="span" delay={1} className="block"><em>Meets Destination</em></MaskHeading>
          </h2>
          <Reveal delay={200}>
            <p className="text-sage/60 text-[0.65rem] tracking-[0.22em] uppercase mt-4 flex items-center gap-3">
              <span>Swipe to explore</span>
              <span className="flex-1 h-px bg-[var(--rule-strong)]" />
              <span>I · II · III · IV</span>
            </p>
          </Reveal>
        </div>

        {/* ── Desktop: two-column layout ── */}
        <div className="lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:items-start">

          {/* Left — sticky intro (desktop only) */}
          <div className="pillar-sticky hidden lg:block">
            <Reveal>
              <span className="eyebrow">The Opportunity</span>
            </Reveal>
            <h2 className="h-display text-[clamp(2.2rem,4.5vw,3.6rem)] mt-8">
              <MaskHeading as="span" className="block">Opportunity</MaskHeading>
              <MaskHeading as="span" delay={1} className="block"><em>Meets Destination</em></MaskHeading>
            </h2>
            <Reveal delay={300}>
              <p className="body-text mt-8 text-[1.05rem]">
                The property&rsquo;s extraordinary natural setting — water,
                forest, silence — defines not merely a hospitality proposition
                but a philosophy of place. Four distinct revenue pillars, each
                with proven market demand.
              </p>
            </Reveal>
            <Reveal delay={420}>
              <div className="mt-10 flex items-center gap-3 text-sage/70 text-[0.7rem] tracking-[0.28em] uppercase">
                <span className="rule-gold" />
                <span>I &nbsp;·&nbsp; II &nbsp;·&nbsp; III &nbsp;·&nbsp; IV &nbsp;·&nbsp; V</span>
              </div>
            </Reveal>
          </div>

          {/* Right — snap scroll on mobile (fixed height), vertical cascade on desktop */}
          <div className="
            flex overflow-x-auto snap-x snap-mandatory gap-px
            lg:flex-col lg:overflow-visible lg:snap-none
            bg-[var(--rule)]
            -mx-6 lg:mx-0 px-6 lg:px-0
            scrollbar-none
            h-[360px] lg:h-auto
          ">
            {PILLARS.map((p, i) => (
              <Reveal key={p.numeral} delay={i * 140} className="snap-start shrink-0 w-[85vw] lg:w-auto h-full lg:h-auto">
                <article className="bg-deep p-6 lg:p-12 relative overflow-hidden group transition-colors duration-700 hover:bg-forest h-full">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover opacity-[0.35] group-hover:opacity-[0.5] group-hover:scale-[1.05] transition-all duration-[1600ms] ease-out"
                    aria-hidden
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(20,16,14,0.92) 0%, rgba(20,16,14,0.75) 55%, rgba(20,16,14,0.55) 100%)",
                    }}
                  />
                  <span
                    aria-hidden
                    className="absolute -right-3 -bottom-10 font-display text-[10rem] lg:text-[14rem] leading-none text-cream/[0.05] select-none transition-all duration-1000 group-hover:text-gold/[0.10] group-hover:-right-1 z-[1]"
                  >
                    {p.numeral}
                  </span>
                  <div className="relative z-[2]">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-display italic text-gold text-[1.1rem] lg:text-[1.2rem]">
                        {p.label}
                      </span>
                      <span className="block h-px flex-1 bg-[var(--rule-strong)]" />
                    </div>
                    <h3 className="h-display-sm text-[clamp(1.4rem,2.8vw,2.4rem)] mb-3">
                      {p.title}
                    </h3>
                    {/* Hook — always visible */}
                    <p className="font-display italic text-brass-light text-[0.95rem] lg:text-[1.05rem] leading-relaxed max-w-[52ch] line-clamp-3 lg:line-clamp-none">
                      {p.hook}
                    </p>
                    {/* Body + facts — desktop only */}
                    <p className="hidden lg:block text-cream/70 text-[0.92rem] leading-relaxed mt-5 mb-8 max-w-[58ch]">
                      {p.body}
                    </p>
                    <ul className="hidden lg:grid grid-cols-2 gap-x-8 gap-y-2.5 mb-6">
                      {p.facts.map((f) => (
                        <li key={f} className="text-[0.84rem] text-sage flex items-start gap-3">
                          <span className="text-gold mt-2 text-[0.55rem]">—</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="hidden lg:block text-[0.66rem] tracking-[0.10em] text-cream/30 italic font-display">
                      {p.source}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
