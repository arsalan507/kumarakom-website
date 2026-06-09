export function Footer() {
  return (
    <footer className="bg-deep border-t border-[var(--hairline)]">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div>
            <p className="font-display text-cream tracking-[0.32em] text-[1rem]">
              KUMARAKOM
            </p>
            <p className="text-sage text-[0.62rem] tracking-[0.28em] mt-1">
              VEMBANAD LAKE, KERALA
            </p>
            <p className="font-display italic text-sage mt-6 max-w-xs text-[0.95rem]">
              A generational waterfront asset, presented in confidence.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 lg:justify-center text-[0.74rem] tracking-[0.18em] uppercase text-cream/70">
            <a href="#property" className="hover:text-gold">
              Property
            </a>
            <a href="#destination" className="hover:text-gold">
              Destination
            </a>
            <a href="#vision" className="hover:text-gold">
              Vision
            </a>
            <a href="#investment" className="hover:text-gold">
              Investment
            </a>
            <a href="#operators" className="hover:text-gold">
              Operators
            </a>
            <a href="#gallery" className="hover:text-gold">
              Gallery
            </a>
            <a href="#contact" className="hover:text-gold">
              Contact
            </a>
          </nav>

          <div className="flex gap-3 lg:justify-end">
            <a href="#contact" className="cta-outline cta-nav">
              For Investors
            </a>
            <a href="#contact" className="cta-fill cta-nav">
              For Operators
            </a>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[var(--rule)] flex flex-col lg:flex-row justify-between gap-4 items-start lg:items-center">
          <p className="text-sage text-[0.7rem] tracking-[0.18em] uppercase">
            Private &amp; Confidential — For Discussion Purposes Only — All
            Projections are Indicative
          </p>
          <p className="text-sage/70 text-[0.7rem]">
            © {new Date().getFullYear()} · Presented in confidence to qualified
            parties.
          </p>
        </div>

        <p className="mt-6 text-sage/50 text-[0.66rem] italic font-display">
          Photography: Pexels contributors. Full credits available on request.
        </p>
      </div>
    </footer>
  );
}
