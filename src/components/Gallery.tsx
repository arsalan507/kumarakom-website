import Image from "next/image";
import { Reveal } from "./Reveal";
import { MaskHeading } from "./MaskHeading";

type Tile = {
  src: string;
  caption: string;
  // grid placement variants
  variant: "hero" | "tall" | "wide" | "square";
};

const TILES: Tile[] = [
  {
    src: "/resort-duck-canal.jpg",
    caption: "The private canal",
    variant: "hero",
  },
  {
    src: "/resort-garden.jpg",
    caption: "The garden",
    variant: "square",
  },
  {
    src: "/resort-restaurant-heritage.jpg",
    caption: "Heritage restaurant",
    variant: "square",
  },
  {
    src: "/resort-ayurveda.jpg",
    caption: "Ayurveda centre",
    variant: "square",
  },
  {
    src: "/resort-coracle.jpg",
    caption: "The canal",
    variant: "square",
  },
  {
    src: "/resort-pool.jpg",
    caption: "Swimming pool",
    variant: "wide",
  },
  {
    src: "/resort-restaurant-ac.jpg",
    caption: "AC restaurant",
    variant: "square",
  },
  {
    src: "/resort-pool-night.jpg",
    caption: "Poolside evening",
    variant: "square",
  },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="tone-ink relative"
      style={{
        background: "linear-gradient(to bottom, var(--char) 0%, var(--ink) 40%)",
        borderTop: "1px solid rgba(201,169,110,0.18)",
      }}
    >
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pt-14 lg:pt-20 pb-16">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">The Canvas</span>
          </Reveal>
          <h2 className="h-display text-[clamp(2.2rem,4.5vw,3.6rem)] mt-8">
            <MaskHeading as="span" className="block">
              Ancient Water, <em>Golden Light</em>
            </MaskHeading>
          </h2>
          <Reveal delay={240}>
            <p className="body-text mt-8 text-[1.02rem]">
              To arrive here by boat at dusk — the backwaters stilled to a mirror, the
              light breaking gold across the palms — is to understand immediately
              why Kumarakom holds such enduring power over those who find it.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Editorial 4-column grid — all square/fixed aspect tiles to avoid blank spaces */}
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-px"
        style={{ background: "var(--rule)" }}
      >
        {TILES.map((t, i) => {
          const spanCls = {
            hero: "col-span-2 lg:col-span-4 aspect-[16/6]",
            wide: "col-span-2 aspect-[2/1]",
            tall: "col-span-1 aspect-square",
            square: "col-span-1 aspect-square",
          }[t.variant];

          return (
            <Reveal key={i} delay={i * 70} className={spanCls}>
              <figure className="relative w-full h-full bg-char overflow-hidden group">
                <Image
                  src={t.src}
                  alt={t.caption}
                  fill
                  sizes={
                    t.variant === "hero"
                      ? "100vw"
                      : t.variant === "wide"
                        ? "(max-width: 1024px) 100vw, 50vw"
                        : "(max-width: 1024px) 50vw, 25vw"
                  }
                  className="object-cover opacity-[0.86] group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-[1400ms] ease-out"
                />
              </figure>
            </Reveal>
          );
        })}
      </div>

      {/* Disclaimer — below images */}
      <Reveal>
        <div
          className="mx-6 lg:mx-10 mt-8 mb-12 lg:mb-16 px-6 py-5 border flex items-start gap-4"
          style={{ borderColor: "var(--rule-strong)", background: "var(--bg-card-deep)" }}
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--brass)" }} aria-hidden>
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
          </svg>
          <p className="text-[0.88rem] leading-relaxed" style={{ color: "var(--on-bg)" }}>
            <span className="font-semibold" style={{ color: "var(--ivory)" }}>Archival images.</span>
            {" "}The photographs showcased on this website represent the property during its operational period and are intended for reference purposes only.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
