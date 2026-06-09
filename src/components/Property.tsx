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
    body: "Largely rectangular, flat, Vembanad lakefront parcel.",
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
    num: "8",
    unit: "yr",
    label: "Operator Legacy",
    body: "Operated continuously under a leading hospitality group with near-full occupancy throughout the tenure.",
  },
  {
    num: "0",
    label: "Encumbrances",
    body: "Clear, marketable title. Nil EC. No disputes whatsoever.",
  },
  {
    num: "12+",
    label: "Licences in Place",
    body: "Including Beer & Wine. All operational approvals secured & current.",
  },
  {
    num: "₹11–13",
    unit: "Cr",
    label: "Acre Benchmark",
    body: "Vembanad waterfront market rate, per 2024–26 institutional transactions.",
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
];

const FACTS = [
  "700 metres from Kumarakom–Ernakulam main road",
  "12 km from Kottayam Railway Station",
  "72 km from Cochin International Airport",
  "Approx. 900 feet of Vembanad Lake water frontage",
  "FSI / FAR permissible: 2.5 — substantial development potential",
  "Largely rectangular, flat topography — ideal for expansion",
  "All statutory liabilities: Nil",
];

export function Property() {
  return (
    <section id="property" className="tone-ivory relative">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-28 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left — narrative + facts */}
          <div>
            <Reveal>
              <span className="eyebrow">The Estate</span>
            </Reveal>

            <h2 className="h-display text-[clamp(2.2rem,4.5vw,3.6rem)] mt-8">
              <MaskHeading as="span" className="block">
                A Property Without
              </MaskHeading>
              <MaskHeading as="span" delay={1} className="block">
                <em>Parallel</em>
              </MaskHeading>
            </h2>

            <Reveal delay={200}>
              <span className="rule-gold mt-8" />
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-8 space-y-5 body-text">
                <p>
                  Set at the Kumarakom Tourist Complex on the northern banks of the
                  Vembanad backwater system, this 14.41-acre estate represents one of
                  the most exceptional hospitality acquisitions available in Kerala
                  today.
                </p>
                <p>
                  The resort has been operated continuously for more than two
                  decades, the last eight years under an exclusive arrangement with
                  one of India&rsquo;s most respected hospitality groups — who
                  achieved near-full occupancy throughout the tenure and requested a
                  20-year renewed lease with an expansion to 40–50 additional rooms.
                </p>
                <p>
                  The land is held with clear, marketable title. No bank loans. Nil
                  encumbrance certificate. All building sanctions received. No
                  coastal regulation zone violations. The property stands fully
                  developed, comprehensively licensed, and entirely ready — awaiting
                  only the vision to match its potential.
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

        {/* Licence band */}
        <Reveal delay={200}>
          <div className="mt-20 pt-10 border-t border-[var(--rule)]">
            <p className="font-sans text-[0.72rem] tracking-[0.22em] uppercase text-brass mb-6 flex items-center gap-4">
              <span className="rule-gold" />
              All Licences &amp; Permissions in Place
            </p>
            <div className="flex flex-wrap gap-2.5">
              {LICENCES.map((l) => (
                <span key={l} className="pill">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
