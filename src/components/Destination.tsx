import Image from "next/image";
import { Reveal } from "./Reveal";
import { KeralaMap } from "./KeralaMap";
import { MaskHeading } from "./MaskHeading";

const PILLS = [
  "Vembanad Lake",
  "Bird Sanctuary",
  "Ayurveda",
  "Houseboat Culture",
  "Kathakali",
  "Nehru Trophy",
  "Pathiramanal Island",
  "Ecotourism",
];

const STATS = [
  { label: "Foreign Tourist Arrivals", value: "10.96 Lakh" },
  { label: "Domestic Tourist Arrivals", value: "1.56 Crore" },
  { label: "Total Tourism Revenue", value: "₹36,258 Cr" },
  { label: "YoY Revenue Growth", value: "+8.61%" },
  { label: "Ayurveda Tourist Growth (annual)", value: "20–25%" },
];

export function Destination() {
  return (
    <section id="destination" className="tone-silk relative">
      {/* Cinematic strip — aerial Kerala waterways before the section content */}
      <Reveal>
        <figure className="relative w-full aspect-[16/6] lg:aspect-[16/5] overflow-hidden">
          <Image
            src="/gallery-aerial.jpeg"
            alt="Aerial view of Kerala backwater network"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ filter: "saturate(0.95)" }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, transparent 70%, var(--silk) 100%)",
            }}
          />
          <figcaption className="absolute left-8 right-8 bottom-6 lg:left-12 lg:bottom-8 font-display italic text-ivory text-[clamp(0.95rem,1.4vw,1.25rem)]">
            Kerala, from above — a watercolour seen from a satellite.
          </figcaption>
        </figure>
      </Reveal>

      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-28 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left */}
          <div>
            <Reveal>
              <span className="eyebrow">The Place</span>
            </Reveal>

            <h2 className="h-display text-[clamp(2.2rem,4.5vw,3.6rem)] mt-8">
              <MaskHeading as="span" className="block">
                Where the Backwaters
              </MaskHeading>
              <MaskHeading as="span" delay={1} className="block">
                Meet the <em>World</em>
              </MaskHeading>
            </h2>

            <Reveal delay={240}>
              <blockquote className="pull-quote mt-12">
                &ldquo;If the beauty of Kerala must be captured in a single word, that
                word is Kumarakom.&rdquo;
              </blockquote>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-12 space-y-5 body-text">
                <p>
                  Sixteen kilometres from Kottayam, cradled by the legendary Vembanad
                  — the largest backwater system in Kerala and one of the largest in
                  Asia — Kumarakom is the crown jewel of Kerala&rsquo;s backwater
                  circuit. The Vembanad reaches its widest point precisely here, where
                  the far shore disappears into haze by mid-morning.
                </p>
                <p>
                  It is one of those rare places where the world&rsquo;s most
                  discerning travellers — honeymooners, wellness seekers, birders,
                  luxury adventurers — all arrive at the same conclusion: there is
                  nowhere quite like this.
                </p>
                <p>
                  The Kumarakom Bird Sanctuary — 14 acres of lush waterside habitat
                  for migratory and resident birds — lies directly adjacent to the
                  property. Pathiramanal Island and the venue of the world-famous
                  Nehru Trophy Snake Boat Race are moments away by boat. Ayurveda,
                  houseboat culture, Kathakali, and Kalaripayattu complete a
                  destination unlike any other on earth.
                </p>
              </div>
            </Reveal>

            <Reveal delay={420}>
              <div className="mt-10 flex flex-wrap gap-2.5">
                {PILLS.map((p) => (
                  <span key={p} className="pill">
                    {p}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — map + stats */}
          <div className="flex flex-col gap-8">
            <Reveal delay={120}>
              <div
                className="border p-6 lg:p-8"
                style={{
                  borderColor: "var(--rule-strong)",
                  background: "var(--bg-card-deep)",
                }}
              >
                <p
                  className="text-[0.7rem] tracking-[0.24em] uppercase text-center mb-4"
                  style={{ color: "var(--on-bg-soft)" }}
                >
                  Kerala
                </p>
                <KeralaMap />
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div
                className="border p-7 lg:p-8"
                style={{
                  borderColor: "var(--rule-strong)",
                  background: "var(--bg-card-deep)",
                }}
              >
                <p className="text-[0.72rem] tracking-[0.22em] uppercase text-brass mb-6">
                  Tourism at a Glance — Kerala
                </p>
                <ul className="divide-y divide-[var(--rule)]">
                  {STATS.map((s) => (
                    <li
                      key={s.label}
                      className="flex justify-between items-baseline py-3.5"
                    >
                      <span
                        className="text-[0.92rem]"
                        style={{ color: "var(--on-bg)" }}
                      >
                        {s.label}
                      </span>
                      <span className="font-display text-brass text-[1.15rem]">
                        {s.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
