"use client";

// WA_NUMBER: Rosh gave a temp test number — update with final number when domain/live number confirmed
const WA_NUMBER = "919895000000";
const WA_MESSAGE = encodeURIComponent(
  "Hello, I'm interested in learning more about the Kumarakom property partnership opportunity."
);

export function WhatsAppFloat() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Begin Partnership — visible on mobile only (desktop has floating CTA in hero) */}
      <button
        onClick={scrollToContact}
        aria-label="Begin Partnership — scroll to contact form"
        className="flex items-center justify-center w-12 h-12 rounded-full transition-transform duration-200 hover:scale-110 active:scale-95 lg:hidden"
        style={{
          background: "var(--brass)",
          filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.45))",
        }}
      >
        {/* Contact form icon */}
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <line x1="7" y1="8" x2="17" y2="8"/>
          <line x1="7" y1="12" x2="17" y2="12"/>
          <line x1="7" y1="16" x2="13" y2="16"/>
        </svg>
      </button>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center gap-2.5 group"
        style={{ filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.45))" }}
      >
        {/* Tooltip — desktop only */}
        <span
          className="hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[0.75rem] tracking-[0.12em] uppercase text-cream bg-deep/90 backdrop-blur-sm border border-[rgba(201,169,110,0.3)] px-3 py-1.5 whitespace-nowrap"
          style={{ fontFamily: "var(--font-lora, serif)" }}
        >
          Chat with us
        </span>

        <div
          className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110 active:scale-95"
          style={{ background: "#25D366" }}
        >
          <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.124 1.533 5.857L.057 23.571a.5.5 0 0 0 .612.612l5.714-1.476A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.91 0-3.696-.513-5.228-1.408l-.374-.222-3.893 1.005 1.005-3.893-.222-.374A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
        </div>
      </a>
    </div>
  );
}
