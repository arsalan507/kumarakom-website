import Image from "next/image";
import { Reveal } from "./Reveal";
import { MaskHeading } from "./MaskHeading";

const CARDS = [
  {
    title: "Hotel Operators",
    body: "Premium and ultra-luxury tier operators who see in Kumarakom what the numbers alone cannot capture — a setting of irreplaceable depth with full infrastructure, 12+ licences, and legacy occupancy.",
  },
  {
    title: "Institutional Investors & Family Offices",
    body: "Long-horizon capital with an appreciation for waterfront assets at the intersection of scarcity, yield, and generational value. This property sits well above Kerala's established market baseline.",
  },
  {
    title: "Ayurveda & Wellness Brands",
    body: "For whom Kumarakom is not a location of convenience but of authentic resonance — the landscape classical Ayurveda prescribes for deep healing. A living tradition, not a manufactured amenity.",
  },
  {
    title: "Architects & Interior Designers",
    body: "Those who design with the land rather than upon it — who understand that in Kumarakom, restraint is the highest form of luxury.",
  },
];

export function PartnerSection() {
  return (
    <section id="partner" className="tone-ink relative">
      {/* Cinematic strip */}
      <Reveal>
        <figure className="relative w-full aspect-[16/6] lg:aspect-[16/5] overflow-hidden">
          <Image
            src="/gallery-kettuvallam.jpeg"
            alt="A traditional Kerala kettuvallam houseboat on the Vembanad"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, transparent 65%, var(--ink) 100%)",
            }}
          />
          <figcaption className="absolute left-8 right-8 bottom-6 lg:left-12 lg:bottom-8 font-display italic text-ivory text-[clamp(0.95rem,1.4vw,1.25rem)]">
            A kettuvallam, drifting — the way it has for centuries.
          </figcaption>
        </figure>
      </Reveal>

      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pt-20 pb-10 lg:pt-28 lg:pb-14">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left */}
          <div>
            <Reveal>
              <span className="eyebrow">Confluence of Vision</span>
            </Reveal>
            <h2 className="h-display text-[clamp(2.2rem,4.5vw,3.6rem)] mt-8">
              <MaskHeading as="span" className="block">
                Confluence of
              </MaskHeading>
              <MaskHeading as="span" delay={1} className="block">
                <em>Vision</em>
              </MaskHeading>
            </h2>
            <Reveal delay={200}>
              <span className="rule-gold mt-8" />
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-10 body-text space-y-5">
                <p>
                  Kumarakom has always been a destination where things come together —
                  ten rivers meeting in one ancient lake, land and water holding
                  each other in an equilibrium that has endured for centuries.
                </p>
                <p>
                  This is not a call for vendors or contractors. It is an
                  invitation to co-creators — those who bring not just capability,
                  but conviction.
                </p>
              </div>
            </Reveal>
            <Reveal delay={360}>
              <blockquote className="pull-quote mt-10 text-[1.18rem]">
                &ldquo;If you are reading this and recognising something — a
                possibility, a fit, a long-held ambition — we would welcome a
                conversation.&rdquo;
              </blockquote>
            </Reveal>
          </div>

          {/* Right — 6 value cards */}
          <div className="flex flex-col gap-4">
            {CARDS.map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <div className="value-card">
                  <svg
                    className="star"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M8 0 L9.3 5.5 L14.8 6.8 L9.3 8.1 L8 13.6 L6.7 8.1 L1.2 6.8 L6.7 5.5 Z" />
                  </svg>
                  <div>
                    <h3
                      className="text-[0.78rem] tracking-[0.18em] uppercase font-semibold mb-2"
                      style={{ color: "var(--on-bg)" }}
                    >
                      {c.title}
                    </h3>
                    <p
                      className="text-[0.92rem] leading-relaxed"
                      style={{ color: "var(--on-bg-muted)" }}
                    >
                      {c.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
