import Image from "next/image";
import { Reveal } from "./Reveal";
import { MaskHeading } from "./MaskHeading";

const CARDS = [
  {
    title: "Clear Title — Zero Encumbrances",
    body: "Ownership certificate, nil EC, no bank loans, no disputes. Legal opinion available on request. Ready to lease or JV from day one.",
  },
  {
    title: "Infrastructure Complete",
    body: "28 cottages, two restaurants, Ayurveda centre, pool, conference hall, gymnasium, boat jetty, generator, STP, WTP. No ground-up build required.",
  },
  {
    title: "All Licences in Place",
    body: "12 licences secured, including Beer & Wine, Food Safety, Pollution Control, and Panchayat Hotel & Restaurant approvals. No regulatory delays.",
  },
  {
    title: "Proven Demand",
    body: "Eight years under a leading hospitality group with near-full occupancy throughout. The previous operator requested expansion to 40–50 additional rooms for a 20-year renewed lease.",
  },
  {
    title: "Expansion Land Available",
    body: "14.41 acres with FSI 2.5 permits significant additional development. The current 28 cottages are a fraction of the site's licensed capacity.",
  },
  {
    title: "Prime Kumarakom Address",
    body: "Kumarakom Tourist Complex, North Kottayam. Adjacent to the bird sanctuary. On the banks of the Vembanad backwater system. An irreplaceable location in India's premier backwater destination.",
  },
];

export function Operators() {
  return (
    <section id="operators" className="tone-silk relative">
      {/* Cinematic strip — kettuvallam drifting before the section opens */}
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
                "linear-gradient(to bottom, transparent 0%, transparent 65%, var(--silk) 100%)",
            }}
          />
          <figcaption className="absolute left-8 right-8 bottom-6 lg:left-12 lg:bottom-8 font-display italic text-ivory text-[clamp(0.95rem,1.4vw,1.25rem)]">
            A kettuvallam, drifting — the way it has for centuries.
          </figcaption>
        </figure>
      </Reveal>

      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-28 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left */}
          <div>
            <Reveal>
              <span className="eyebrow">For Operators</span>
            </Reveal>
            <h2 className="h-display text-[clamp(2.2rem,4.5vw,3.6rem)] mt-8">
              <MaskHeading as="span" className="block">
                A Partnership,
              </MaskHeading>
              <MaskHeading as="span" delay={1} className="block">
                Not a <em>Pitch</em>
              </MaskHeading>
            </h2>
            <Reveal delay={200}>
              <span className="rule-gold mt-8" />
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-10 space-y-5 body-text">
                <p>
                  The most significant challenge for premium operators entering the
                  Kerala backwater circuit is not demand — it is supply. Properties
                  of this quality, with this combination of land extent, water
                  frontage, clear title, and operational infrastructure, do not come
                  to market.
                </p>
              </div>
            </Reveal>
            <Reveal delay={360}>
              <blockquote className="pull-quote mt-10 text-[1.18rem]">
                &ldquo;The previous custodian operated this property for eight years
                with near-full occupancy recorded year-round. The market exists. The
                infrastructure is in place. The opportunity is to redefine what is
                possible here.&rdquo;
              </blockquote>
            </Reveal>
            <Reveal delay={460}>
              <div className="mt-10 space-y-5 body-text">
                <p>
                  The existing built-up area includes a reception building, dual
                  restaurants (AC and Heritage), professional kitchen, conference
                  hall, Ayurveda centre, gymnasium, swimming pool, and boat jetty. The
                  land accommodates an additional 40–72 rooms, as referenced in the
                  previous operator&rsquo;s formal expansion request. All operational
                  licences — including Beer &amp; Wine — are secured and current.
                </p>
                <p>
                  We are seeking a long-term operator partner whose vision for this
                  property matches its inherent quality. Revenue-share agreements of
                  15–25 years are under consideration, with terms structured to align
                  operator incentives with long-term asset appreciation.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right — 6 cards */}
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
