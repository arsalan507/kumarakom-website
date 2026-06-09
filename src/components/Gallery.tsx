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
    src: "/hero-vembanad-dawn.jpeg",
    caption: "Vembanad at dawn — still, golden, infinite.",
    variant: "hero", // top wide image
  },
  {
    src: "/gallery-cottage.jpeg",
    caption: "Tiled roof, lily pond — the architecture of slowness.",
    variant: "tall",
  },
  {
    src: "/gallery-kingfisher.jpeg",
    caption: "The kingfisher — patron of the sanctuary.",
    variant: "square",
  },
  {
    src: "/gallery-lotus.jpeg",
    caption: "Born of water, untouched by it.",
    variant: "square",
  },
  {
    src: "/gallery-kettuvallam.jpeg",
    caption: "A kettuvallam, drifting — the way it has for centuries.",
    variant: "wide",
  },
  {
    src: "/gallery-ayurveda.jpeg",
    caption: "The ritual — oil, brass, breath.",
    variant: "tall",
  },
  {
    src: "/gallery-thatched.jpeg",
    caption: "A cottage between water and sky.",
    variant: "square",
  },
  {
    src: "/gallery-aerial.jpeg",
    caption: "Kerala, from above — a watercolour seen from a satellite.",
    variant: "wide",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="tone-ink relative">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pt-28 lg:pt-40 pb-16">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">The Atmosphere</span>
          </Reveal>
          <h2 className="h-display text-[clamp(2.2rem,4.5vw,3.6rem)] mt-8">
            <MaskHeading as="span" className="block">
              Ancient Water, <em>Golden Light</em>
            </MaskHeading>
          </h2>
          <Reveal delay={240}>
            <p className="body-text mt-8 text-[1.02rem]">
              To arrive here by boat at dusk — the lake stilled to a mirror, the
              light breaking gold across the palms — is to understand immediately
              why Kumarakom holds such enduring power over those who find it.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Editorial 4-column masonry-style grid */}
      <div
        className="
          grid grid-cols-2 lg:grid-cols-4 gap-px
        "
        style={{ background: "var(--rule)" }}
      >
        {TILES.map((t, i) => {
          const spanCls = {
            hero: "col-span-2 lg:col-span-4 aspect-[16/7]",
            wide: "col-span-2 aspect-[16/9]",
            tall: "row-span-2 col-span-1 aspect-[3/4] lg:aspect-[1/1.7]",
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
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
                <figcaption className="absolute left-6 right-6 bottom-5 font-display italic text-brass-light text-[clamp(0.85rem,1vw,1.05rem)] leading-snug">
                  {t.caption}
                </figcaption>
              </figure>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
