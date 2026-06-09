"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { MaskHeading } from "./MaskHeading";

const DOCS = [
  "Financial simulations (15–25 yr)",
  "Operator term sheets",
  "Legal title opinion",
  "Site plans & built-up area",
  "Licence register",
];

const ROLES = [
  "Institutional Investor",
  "Family Office",
  "Hotel Operator",
  "Developer",
  "Strategic Partner",
  "Other",
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="tone-ivory relative">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-28 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left */}
          <div>
            <Reveal>
              <span className="eyebrow">Expression of Interest</span>
            </Reveal>
            <h2 className="h-display text-[clamp(2.2rem,4.5vw,3.6rem)] mt-8">
              <MaskHeading as="span" className="block">
                Begin a <em>Conversation</em>
              </MaskHeading>
            </h2>
            <Reveal delay={200}>
              <span className="rule-gold mt-8" />
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-10 space-y-5 body-text">
                <p>
                  This property is presented to a limited audience of qualified
                  investors and operator partners. We welcome enquiries from
                  institutional investors, family offices, and hotel operators of
                  international standing.
                </p>
                <p>
                  All correspondence is treated with absolute discretion.
                  Comprehensive information memoranda — including full financial
                  projections, legal documentation, site plans, and operator term
                  sheets — are available to qualified parties following a brief
                  introductory exchange.
                </p>
                <p>
                  There is no sales pressure here, only the patience to find the
                  right steward for something extraordinary.
                </p>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-12 border-t pt-8" style={{ borderColor: "var(--rule-strong)" }}>
                <p className="text-[0.7rem] tracking-[0.22em] uppercase text-brass mb-3">
                  Location
                </p>
                <p
                  className="font-display italic text-[1.05rem] leading-relaxed"
                  style={{ color: "var(--on-bg)" }}
                >
                  Kumarakom Tourist Complex, Chakrampady Road,
                  <br />
                  Kumarakom North, Kottayam — 686 563, Kerala
                </p>
              </div>
            </Reveal>

            <Reveal delay={480}>
              <div className="mt-8 pt-6 border-t" style={{ borderColor: "var(--rule-strong)" }}>
                <p className="text-[0.7rem] tracking-[0.22em] uppercase text-brass mb-3">
                  Available Documentation
                </p>
                <p
                  className="font-display italic text-[0.98rem] leading-relaxed"
                  style={{ color: "var(--on-bg-muted)" }}
                >
                  {DOCS.join(" · ")}
                </p>
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
                    Your enquiry has been received. A response will follow within 48
                    hours, in strict confidence.
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
                        Select your role
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
                      rows={5}
                      placeholder="Please share your interest, timeline, or any initial questions…"
                      className="field resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-2">
                    <button type="submit" className="cta-fill">
                      Submit Enquiry
                    </button>
                    <p className="text-sage text-[0.78rem] leading-relaxed sm:max-w-xs">
                      All enquiries are treated with strict confidentiality. This
                      is a private placement — not a public offering.
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
