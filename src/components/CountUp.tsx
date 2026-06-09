"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated number that counts up from 0 → target when scrolled into view.
 * Designed for institutional pacing — linear-ish ease-out, NO bounce/overshoot.
 * Supports decimals, prefixes (₹), separators (–), and trailing "+".
 *
 * Parses the input value to extract numeric portions while preserving symbols,
 * so "14.41" / "900" / "12+" / "₹11–13" all work without prop drilling.
 */
export function CountUp({
  value,
  duration = 1600,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(() => placeholder(value));
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animate = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const segments = parseSegments(value);
      const start = performance.now();

      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = easeOutQuart(t);
        setDisplay(renderSegments(segments, eased));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className} aria-label={value}>
      {display}
    </span>
  );
}

type Segment =
  | { kind: "num"; target: number; decimals: number }
  | { kind: "literal"; text: string };

function parseSegments(value: string): Segment[] {
  // Match runs of [digits + optional decimal] vs everything else.
  // Examples: "14.41" -> [num 14.41], "₹11–13" -> [lit ₹, num 11, lit –, num 13],
  // "12+" -> [num 12, lit +]
  const out: Segment[] = [];
  const re = /(\d+(?:\.\d+)?)|([^\d]+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(value))) {
    if (m[1]) {
      const target = parseFloat(m[1]);
      const decimals = m[1].includes(".") ? m[1].split(".")[1].length : 0;
      out.push({ kind: "num", target, decimals });
    } else if (m[2]) {
      out.push({ kind: "literal", text: m[2] });
    }
  }
  return out;
}

function renderSegments(segments: Segment[], t: number): string {
  return segments
    .map((s) => {
      if (s.kind === "literal") return s.text;
      const current = s.target * t;
      return current.toFixed(s.decimals);
    })
    .join("");
}

function placeholder(value: string): string {
  // Initial frame — same width as final to prevent CLS, but render zeros for numbers
  return parseSegments(value)
    .map((s) =>
      s.kind === "literal" ? s.text : (0).toFixed(s.decimals),
    )
    .join("");
}

function easeOutQuart(t: number): number {
  // Institutional-grade ease: fast start, smooth deceleration, no overshoot
  return 1 - Math.pow(1 - t, 4);
}
