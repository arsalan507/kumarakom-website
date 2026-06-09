"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Heading wrapper that performs a print-magazine clip-path slide-up reveal.
 * The container is overflow-hidden; the inner span starts at translateY(112%)
 * and rises into place when scrolled into view.
 *
 * Wrap each LINE in a separate MaskHeading for staggered multi-line reveals,
 * or wrap a whole heading for a single-line treatment.
 */
export function MaskHeading({
  as: Tag = "span",
  children,
  delay = 0,
  className = "",
  spanClassName = "",
}: {
  as?: keyof React.JSX.IntrinsicElements;
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3;
  className?: string;
  spanClassName?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("in");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLElement>}
      className={`mask ${delay ? `delay-${delay}` : ""} ${className}`}
    >
      <span className={spanClassName}>{children}</span>
    </Tag>
  );
}
