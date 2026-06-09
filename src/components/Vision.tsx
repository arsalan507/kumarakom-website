import Image from "next/image";
import { Reveal } from "./Reveal";
import { MaskHeading } from "./MaskHeading";

const PILLARS = [
  {
    numeral: "I",
    label: "Pillar One",
    title: "Wellness & Ayurveda",
    image: "/gallery-ayurveda.jpeg",
    body: "Kerala is the birthplace of Ayurveda — not as a tourism product, but as a way of life practised here for thousands of years. The existing 3,500 sq.ft. Ayurveda centre, yoga pavilion, and licensed Ayurveda kitchen form the nucleus of a world-class wellness retreat.",
    facts: [
      "3,500 sq.ft. Ayurveda Centre",
      "Yoga Centre & Gymnasium",
      "Ayurveda Kitchen — licensed",
      "Germany, UK & UAE: fastest-growing source markets",
      "20–25% annual growth in Ayurveda tourism",
    ],
  },
  {
    numeral: "II",
    label: "Pillar Two",
    title: "Ecotourism & Nature",
    image: "/gallery-kingfisher.jpeg",
    body: "Vembanad Lake — Kerala's longest, host to the Nehru Trophy Snake Boat Race — is the resort's front garden. The Kumarakom Bird Sanctuary, Pathiramanal Island, and the backwater network offer an ecotourism experience found nowhere else on the subcontinent.",
    facts: [
      "900 ft of Vembanad Lake frontage",
      "Bird sanctuary on adjacent land",
      "Boat jetty — houseboat & kayak access",
      "Water sports: skiing, surfing, parasailing",
      "Slow travel — the new luxury",
    ],
  },
  {
    numeral: "III",
    label: "Pillar Three",
    title: "Sustainable Luxury",
    image: "/gallery-thatched.jpeg",
    body: "Low-density resort design — 28 to 100 keys across 14.41 acres — ensures the guest-to-nature ratio that defines the finest experiential properties globally. Sewage and water treatment plants in place. The architecture of restraint as competitive advantage.",
    facts: [
      "Sewage Treatment Plant in situ",
      "Water Treatment Infrastructure",
      "Low-density: 4–7 keys per acre (resort standard)",
      "No coastal regulation zone violations",
      "Heritage cuisine & traditional art forms",
    ],
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
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-28 lg:py-40">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          {/* Left — sticky pinned intro */}
          <div className="pillar-sticky">
            <Reveal>
              <span className="eyebrow">The Vision</span>
            </Reveal>
            <h2 className="h-display text-[clamp(2.2rem,4.5vw,3.6rem)] mt-8">
              <MaskHeading as="span" className="block">
                Three Pillars of
              </MaskHeading>
              <MaskHeading as="span" delay={1} className="block">
                <em>Enduring Value</em>
              </MaskHeading>
            </h2>
            <Reveal delay={300}>
              <p className="body-text mt-8 text-[1.05rem]">
                The property&rsquo;s extraordinary natural setting — water,
                forest, silence — defines not merely a hospitality proposition
                but a philosophy of place.
              </p>
            </Reveal>
            <Reveal delay={420}>
              <div className="mt-10 hidden lg:flex items-center gap-3 text-sage/70 text-[0.7rem] tracking-[0.28em] uppercase">
                <span className="rule-gold" />
                <span>I &nbsp;·&nbsp; II &nbsp;·&nbsp; III</span>
              </div>
            </Reveal>
          </div>

          {/* Right — vertical pillar cascade */}
          <div className="flex flex-col gap-px bg-[var(--hairline)]">
            {PILLARS.map((p, i) => (
              <Reveal key={p.numeral} delay={i * 140}>
                <article className="bg-deep p-8 lg:p-12 relative overflow-hidden group transition-colors duration-700 hover:bg-forest">
                  {/* Atmospheric image — very low opacity, scales subtly on hover */}
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover opacity-[0.12] group-hover:opacity-[0.22] group-hover:scale-[1.05] transition-all duration-[1600ms] ease-out"
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
                    className="absolute -right-3 -bottom-10 font-display text-[14rem] leading-none text-cream/[0.05] select-none transition-all duration-1000 group-hover:text-gold/[0.10] group-hover:-right-1 z-[1]"
                  >
                    {p.numeral}
                  </span>
                  <div className="relative z-[2]">
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="font-display italic text-gold text-[1.2rem]">
                        {p.label}
                      </span>
                      <span className="block h-px flex-1 bg-[var(--rule-strong)]" />
                    </div>
                    <h3 className="h-display-sm text-[clamp(1.7rem,2.8vw,2.4rem)] mb-6">
                      {p.title}
                    </h3>
                    <p className="text-cream/80 text-[0.96rem] leading-relaxed mb-8 max-w-[58ch]">
                      {p.body}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                      {p.facts.map((f) => (
                        <li
                          key={f}
                          className="text-[0.84rem] text-sage flex items-start gap-3"
                        >
                          <span className="text-gold mt-2 text-[0.55rem]">—</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
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
