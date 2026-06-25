import { Reveal } from "./Reveal";
import { MaskHeading } from "./MaskHeading";

const OWNERS = [
  {
    name: "S. M. Alex",
    title: "Chairman & Managing Director",
    company: "Alex Resorts & Hotels Private Limited",
    credentials: [
      "B.Sc. (Chemical Engineering), VJTI, Mumbai",
      "MBA, Jamnalal Bajaj Institute of Management Studies (JBIMS), Mumbai",
    ],
  },
  {
    name: "Rosh Alex",
    title: "Executive Director",
    company: "Alex Resorts & Hotels Private Limited",
    credentials: [
      "B.E. (Computer Science), BMS College of Engineering",
      "MBA (PGP-FMB), SPJIMR, Mumbai",
    ],
  },
];

export function Owners() {
  return (
    <section id="owners" className="tone-moss">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-28 lg:py-40">
        <Reveal>
          <span className="eyebrow">About the Owners</span>
        </Reveal>

        <h2 className="h-display text-[clamp(2rem,4vw,3.2rem)] mt-8 mb-16 lg:mb-20">
          <MaskHeading as="span" className="block">
            The <em>People</em> Behind
          </MaskHeading>
          <MaskHeading as="span" delay={1} className="block">
            The Backwater Estate
          </MaskHeading>
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {OWNERS.map((owner, i) => (
            <Reveal key={owner.name} delay={i * 120}>
              <div
                className="border p-8 lg:p-10"
                style={{
                  borderColor: "var(--rule-strong)",
                  background: "var(--bg-card-deep)",
                }}
              >
                <p className="font-display text-[clamp(1.5rem,2.5vw,2rem)] text-ivory mb-1">
                  {owner.name}
                </p>
                <p className="font-display italic text-gold text-[0.95rem] mb-1">
                  {owner.title}
                </p>
                <p className="text-sage text-[0.72rem] tracking-[0.14em] uppercase mb-6">
                  {owner.company}
                </p>
                <span className="rule-gold mb-6 block" />
                <ul className="space-y-2">
                  {owner.credentials.map((c) => (
                    <li key={c} className="body-text text-[0.88rem] text-cream/70 flex gap-3">
                      <span className="text-brass mt-[3px] shrink-0">—</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
