"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";
import { MaskHeading } from "./MaskHeading";

export function Hero() {
  const imgWrapRef = useRef<HTMLDivElement>(null);

  // Single-section hero parallax: image drifts at 0.4× scroll velocity while
  // the foreground stays fixed. Stops contributing transform once the section
  // is fully past viewport to keep paint cheap.
  useEffect(() => {
    const el = imgWrapRef.current;
    if (!el) return;
    let raf = 0;

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const vh = window.innerHeight;
        if (y < vh * 1.2) {
          el.style.transform = `translate3d(0, ${y * 0.35}px, 0)`;
        }
        raf = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] hero-glow flex items-center justify-center overflow-hidden"
    >
      {/* Parallax wrapper — image is inside a slow Ken Burns animation */}
      <div
        ref={imgWrapRef}
        className="absolute inset-0 will-change-transform"
        aria-hidden
      >
        <div className="absolute inset-0 ken-burns">
          <Image
            src="/hero-vembanad-dawn.jpeg"
            alt="Vembanad backwater at dawn — houseboat passing the palms"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ filter: "saturate(0.9) contrast(1.08) brightness(0.6)" }}
          />
        </div>
      </div>

      {/* Top vignette — keeps nav readable */}
      <div
        className="absolute inset-x-0 top-0 h-52 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(14,26,20,0.92) 0%, rgba(14,26,20,0.45) 60%, transparent 100%)",
        }}
      />
      {/* Bottom vignette — readability + section blend */}
      <div
        className="absolute inset-x-0 bottom-0 h-72 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(to top, rgba(14,26,20,0.95) 0%, rgba(14,26,20,0.4) 70%, transparent 100%)",
        }}
      />
      {/* Center radial darken — headline contrast */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 75% 70% at 50% 55%, rgba(14,26,20,0.65), rgba(14,26,20,0.2) 70%, transparent 100%)",
        }}
      />
      {/* Gold light wash from upper right — suggests dawn / lantern glow */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 80% 20%, rgba(201,169,110,0.12), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[920px] px-6 text-center py-32">
        <Reveal>
          <div className="text-[0.7rem] tracking-[0.28em] uppercase text-sage flex items-center justify-center gap-3 mb-10">
            <span>Kumarakom</span>
            <span className="text-gold">·</span>
            <span>Kerala</span>
            <span className="text-gold">·</span>
            <span>Vembanad Lake</span>
          </div>
        </Reveal>

        <h1 className="h-display text-[clamp(2.6rem,7vw,5.4rem)]">
          <MaskHeading as="span" className="block">
            A Rare Invitation —
          </MaskHeading>
          <MaskHeading as="span" delay={1} className="block">
            <em>Kumarakom, Kerala.</em>
          </MaskHeading>
        </h1>

        <Reveal delay={500}>
          <p className="font-display italic text-sage mt-8 text-[clamp(1rem,1.6vw,1.25rem)]">
            14.41 Acres &middot; 900 Feet of Waterfront &middot; Zero Encumbrances
          </p>
        </Reveal>

        <Reveal delay={620}>
          <p className="body-text mx-auto mt-10 text-[0.98rem] text-cream/70">
            A generational waterfront asset on the Vembanad backwater system,
            presented in confidence to a discerning circle of investors and
            world-class operators.
          </p>
        </Reveal>

        <Reveal delay={740}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <a href="#investment" className="cta-outline">
              For Investors
            </a>
            <a href="#operators" className="cta-fill">
              For Operators
            </a>
          </div>
        </Reveal>

        <Reveal delay={960}>
          <div className="mt-24 flex justify-center">
            <span className="scroll-cue">Scroll</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
