"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "#property", label: "Property" },
  { href: "#destination", label: "Destination" },
  { href: "#vision", label: "Vision" },
  { href: "#partner", label: "Partner" },
  { href: "#gallery", label: "Gallery" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-deep/85 backdrop-blur-md border-b border-[var(--hairline)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 h-20 flex items-center justify-between gap-6">
        {/* Wordmark */}
        <a href="#hero" className="flex flex-col leading-tight shrink-0">
          <span className="font-display text-[1.05rem] tracking-[0.32em] text-cream">
            KUMARAKOM
          </span>
          <span className="text-[0.62rem] tracking-[0.28em] text-sage mt-[2px]">
            VEMBANAD BACKWATERS, KERALA
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.74rem] uppercase tracking-[0.18em] text-cream/85 hover:text-gold transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA (desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="#contact" className="cta-fill cta-nav">
            Begin Our Partnership
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex items-center justify-center w-10 h-10 border border-[var(--hairline-strong)] text-cream"
        >
          <span className="block w-5 h-px bg-cream relative before:absolute before:left-0 before:-top-1.5 before:w-5 before:h-px before:bg-cream after:absolute after:left-0 after:top-1.5 after:w-5 after:h-px after:bg-cream" />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-deep border-t border-[var(--hairline)] px-6 py-6">
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-[0.78rem] uppercase tracking-[0.18em] text-cream/85 hover:text-gold py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-3 mt-6">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="cta-fill flex-1"
            >
              Partner With Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
