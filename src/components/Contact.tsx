"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { MaskHeading } from "./MaskHeading";


const ROLES = [
  "Hotel Operators",
  "Institutional Investors",
  "Family Offices",
  "Ayurveda and Wellness Brands",
  "Architecture and Interior Design",
  "Wellness Experts / Practitioners",
  "Construction and Development Partners",
  "Others",
];

// WA_NUMBER: Rosh gave a temp test number on Jun 22 WhatsApp chat — Arsalan to update here
const WA_NUMBER = "919895000000";
const WA_MESSAGE = encodeURIComponent(
  "Hi, I came across the Kumarakom Vembanad estate and would like to learn more about partnering."
);

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="tone-ink relative">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left */}
          <div>
            <Reveal>
              <span className="eyebrow">About Us</span>
            </Reveal>
            <h2 className="h-display text-[clamp(2.2rem,4.5vw,3.6rem)] mt-8">
              <MaskHeading as="span" className="block">
                Let&rsquo;s
              </MaskHeading>
              <MaskHeading as="span" delay={1} className="block">
                <em>Collaborate</em>
              </MaskHeading>
            </h2>
            <Reveal delay={200}>
              <span className="rule-gold mt-8" />
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-10 space-y-5 body-text">
                <p>
                  This property is not on the open market. It is presented
                  privately to a limited circle — partners who understand what
                  a fully built, licensed, Vembanad-front estate represents
                  in today&rsquo;s Kerala.
                </p>
                <p className="font-display italic text-brass-light text-[1.05rem]">
                  One conversation is all it takes to know if this is yours.
                </p>
              </div>
            </Reveal>

            {/* Two-column partner brief */}
            <Reveal delay={340}>
              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                <div
                  className="p-5 border"
                  style={{ borderColor: "var(--rule-strong)", background: "var(--bg-card)" }}
                >
                  <p className="text-[0.68rem] tracking-[0.22em] uppercase text-brass">
                    Capital Partner
                  </p>
                </div>
                <div
                  className="p-5 border"
                  style={{ borderColor: "var(--rule-strong)", background: "var(--bg-card)" }}
                >
                  <p className="text-[0.68rem] tracking-[0.22em] uppercase text-brass">
                    Operating Partner
                  </p>
                </div>
              </div>
            </Reveal>

          </div>

          {/* Right — form */}
          <Reveal delay={140}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="p-6 lg:p-10 space-y-5"
              style={{
                background: "var(--ink)",
                border: "1px solid var(--ink)",
                color: "var(--ivory)",
              }}
            >
              {submitted ? (
                <div className="py-16 text-center">
                  <p className="font-display italic text-brass-light text-2xl mb-3">
                    Thank you.
                  </p>
                  <p className="text-cream/80 max-w-sm mx-auto">
                    Your enquiry has been received. We&rsquo;ll be in touch
                    within 48 hours, in strict confidence.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="field-label" htmlFor="name">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        placeholder="Your name"
                        className="field"
                      />
                    </div>
                    <div>
                      <label className="field-label" htmlFor="org">
                        Organisation
                      </label>
                      <input
                        id="org"
                        name="org"
                        placeholder="Company / Fund"
                        className="field"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="field-label" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="field"
                    />
                  </div>

                  <div>
                    <label className="field-label" htmlFor="role">
                      I am enquiring as
                    </label>
                    <select
                      id="role"
                      name="role"
                      required
                      defaultValue=""
                      className="field appearance-none"
                    >
                      <option value="" disabled>
                        Select your interest
                      </option>
                      {ROLES.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="field-label" htmlFor="message">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Share your interest, timeline, or initial questions…"
                      className="field resize-none"
                    />
                  </div>

                  <div className="flex flex-col gap-3 pt-2">
                    <button type="submit" className="cta-fill w-full justify-center">
                      Partner With Us
                    </button>

                    {/* WhatsApp button */}
                    <a
                      href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 py-4 text-[0.72rem] tracking-[0.22em] uppercase font-medium border transition-colors duration-300"
                      style={{
                        borderColor: "rgba(37,211,102,0.35)",
                        color: "rgba(37,211,102,0.85)",
                        background: "rgba(37,211,102,0.06)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(37,211,102,0.7)";
                        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(37,211,102,0.12)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(37,211,102,0.35)";
                        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(37,211,102,0.06)";
                      }}
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Connect on WhatsApp
                    </a>

                    <p className="text-sage/60 text-[0.72rem] text-center leading-relaxed">
                      All enquiries are treated in strict confidence.
                    </p>
                  </div>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
