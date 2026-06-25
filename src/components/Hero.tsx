"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";
import { MaskHeading } from "./MaskHeading";

export function Hero() {
  const imgWrapRef = useRef<HTMLDivElement>(null);

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
      <div
        ref={imgWrapRef}
        className="absolute inset-0 will-change-transform"
        aria-hidden
      >
        <div className="absolute inset-0 ken-burns">
          <Image
            src="/resort-duck-canal.jpg"
            alt="The private canal — white ducks, still green water, the cottages and backwaters beyond"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 55%", filter: "saturate(0.88) contrast(1.05) brightness(0.48)" }}
          />
        </div>
      </div>

      {/* Top vignette */}
      <div
        className="absolute inset-x-0 top-0 h-52 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(14,26,20,0.92) 0%, rgba(14,26,20,0.45) 60%, transparent 100%)",
        }}
      />
      {/* Bottom vignette */}
      <div
        className="absolute inset-x-0 bottom-0 h-72 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(to top, rgba(14,26,20,0.95) 0%, rgba(14,26,20,0.4) 70%, transparent 100%)",
        }}
      />
      {/* Center radial darken */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 75% 70% at 50% 55%, rgba(14,26,20,0.65), rgba(14,26,20,0.2) 70%, transparent 100%)",
        }}
      />
      {/* Gold light wash */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 80% 20%, rgba(201,169,110,0.12), transparent 70%)",
        }}
      />

      <div
        className="relative z-10 mx-auto max-w-[920px] px-6 text-center py-32"
        style={{ animation: "heroTextIn 0.01s 10s forwards", opacity: 0 }}
      >

        <h1 className="h-display text-[clamp(2.2rem,6vw,4.6rem)]">
          <MaskHeading as="span" className="block">
            A Rare Invitation —
          </MaskHeading>
          <MaskHeading as="span" delay={1} className="block">
            <em>Kumarakom, Kerala.</em>
          </MaskHeading>
        </h1>

        <Reveal delay={620}>
          <p className="font-display italic text-sage mt-8 text-[clamp(0.95rem,1.5vw,1.15rem)] max-w-[560px] mx-auto">
            14.41 Acres&nbsp;&nbsp;·&nbsp;&nbsp;900 Feet of Waterfront&nbsp;&nbsp;·&nbsp;&nbsp;Zero Encumbrances
          </p>
        </Reveal>

        <Reveal delay={750}>
          <p className="body-text mx-auto mt-6 text-[0.95rem] text-cream/65 max-w-[560px]">
            A generational waterfront asset on the backwaters of Vembanad Lake, presented privately to a discerning circle of investors and world-class operators.
          </p>
        </Reveal>

        <Reveal delay={960}>
          <div className="mt-20 flex justify-center gap-4">
            <a href="#contact?role=investor" className="cta-outline">For Investors</a>
            <a href="#contact?role=operator" className="cta-fill">For Operators</a>
          </div>
        </Reveal>

        <Reveal delay={1100}>
          <div className="mt-14 flex justify-center">
            <span className="scroll-cue">Scroll</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
