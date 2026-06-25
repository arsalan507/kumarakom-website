const NAV = [
  { href: "#property", label: "Property" },
  { href: "#destination", label: "Destination" },
  { href: "#vision", label: "Vision" },
  { href: "#partner", label: "Partner" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-deep border-t border-[var(--hairline)]">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-14 lg:py-16">

        {/* Top row — wordmark · nav · CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          {/* Wordmark + tagline */}
          <div>
            <p className="font-display text-cream tracking-[0.32em] text-[1rem]">
              THE BACKWATER ESTATE
            </p>
            <p className="text-sage text-[0.62rem] tracking-[0.28em] mt-1">
              KUMARAKOM, KERALA
            </p>
            <p className="font-display italic text-sage/80 mt-5 text-[0.9rem] leading-relaxed max-w-[260px]">
              2,000 years of sacred history.
              <br />
              Seeking its defining partner.
            </p>
          </div>

          {/* Nav — 2 clean columns of 3 */}
          <nav className="grid grid-cols-2 gap-x-8 gap-y-3 lg:justify-self-center text-[0.72rem] tracking-[0.18em] uppercase">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-cream/60 hover:text-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex lg:justify-end">
            <a href="#contact" className="cta-fill cta-nav">
              Partner With Us
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-[var(--rule)]" />

        {/* Address row */}
        <div className="mt-8 flex flex-col sm:flex-row gap-8 sm:gap-16">
          <div>
            <p className="text-[0.66rem] tracking-[0.22em] uppercase text-brass mb-2">
              Property Location
            </p>
            <p className="font-display italic text-ivory/70 text-[0.88rem] leading-relaxed">
              Kumarakom Tourist Complex, Chakrampady Road,<br />
              Kumarakom North, Kottayam — 686 563, Kerala
            </p>
            <a
              href="https://maps.google.com/?q=Kumarakom+Tourist+Complex+Kottayam+Kerala"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-2.5 text-[0.68rem] tracking-[0.14em] uppercase text-brass hover:text-gold transition-colors"
            >
              <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor" aria-hidden>
                <path d="M8 0C5.24 0 3 2.24 3 5c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
              </svg>
              View on Google Maps
            </a>
          </div>

          <div>
            <p className="text-[0.66rem] tracking-[0.22em] uppercase text-brass mb-2">
              Registered Office
            </p>
            <p className="font-display italic text-ivory/70 text-[0.88rem] leading-relaxed">
              Alex Resorts and Hotels Pvt Ltd<br />
              B-1254, 14th Floor, Mittal Towers,<br />
              M.G. Road, Bangalore — 560 001
            </p>
          </div>

          <div>
            <p className="text-[0.66rem] tracking-[0.22em] uppercase text-brass mb-2">
              Contact
            </p>
            <a
              href="mailto:alexresorts@gmail.com"
              className="font-display italic text-ivory/70 text-[0.88rem] hover:text-gold transition-colors"
            >
              alexresorts@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 pt-6 border-t border-[var(--rule)] flex flex-col sm:flex-row justify-between gap-3 items-start sm:items-center">
          <p className="text-sage/60 text-[0.67rem] tracking-[0.16em] uppercase">
            Private &amp; Confidential — For Discussion Purposes Only
          </p>
          <p className="text-sage/40 text-[0.67rem]">
            © 2026 · Alex Resorts &amp; Hotels Pvt. Ltd. · Photography: property archives
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 pt-5 border-t border-[var(--rule)]">
          <p className="text-sage/40 text-[0.64rem] leading-relaxed max-w-3xl">
            The photographs showcased on this website represent the property during its operational period and are intended for reference purposes only.
          </p>
        </div>

      </div>
    </footer>
  );
}
