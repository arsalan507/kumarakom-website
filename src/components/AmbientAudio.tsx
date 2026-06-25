"use client";

import { useEffect, useRef, useState } from "react";

export function AmbientAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [on, setOn] = useState(false);

  // Autoplay muted on mount — browsers allow muted autoplay
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0;
    audio.play().catch(() => {/* blocked — user will click to start */});
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (on) {
      // Fade out
      const fadeOut = setInterval(() => {
        if (audio.volume > 0.05) {
          audio.volume = Math.max(0, audio.volume - 0.05);
        } else {
          audio.volume = 0;
          audio.muted = true;
          clearInterval(fadeOut);
        }
      }, 60);
    } else {
      // Resume if paused, then fade in
      audio.muted = false;
      if (audio.paused) audio.play().catch(() => {});
      audio.volume = 0;
      const fadeIn = setInterval(() => {
        if (audio.volume < 0.28) {
          audio.volume = Math.min(0.3, audio.volume + 0.02);
        } else {
          clearInterval(fadeIn);
        }
      }, 60);
    }

    setOn((v) => !v);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/birds-ambient.mp3"
        loop
        muted
        preload="none"
        aria-hidden
      />

      <button
        onClick={toggle}
        aria-label={on ? "Mute ambient sound" : "Play ambient birdsong"}
        className="fixed bottom-6 left-6 z-50 hidden sm:flex items-center gap-2.5 group"
        style={{ filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.4))" }}
      >
        {/* Icon pill */}
        <div
          className="flex items-center gap-2 px-3.5 py-2.5 border transition-all duration-300 group-hover:border-gold/60"
          style={{
            background: "rgba(14,26,20,0.82)",
            backdropFilter: "blur(8px)",
            borderColor: on ? "rgba(201,169,110,0.5)" : "rgba(255,255,255,0.12)",
          }}
        >
          {/* Sound wave icon */}
          <svg
            viewBox="0 0 20 20"
            fill="none"
            className="w-4 h-4 shrink-0"
            style={{ color: on ? "#C9A96E" : "rgba(255,255,255,0.5)" }}
            aria-hidden
          >
            {on ? (
              <>
                <path d="M3 7v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M7 4v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M11 6v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M15 8v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M19 9v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </>
            ) : (
              <>
                <path d="M3 7v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
                <path d="M7 9v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
                <path d="M11 8v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
                <path d="M15 9v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
                <path d="M2 2l16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
              </>
            )}
          </svg>

          <span
            className="text-[0.65rem] tracking-[0.14em] uppercase hidden sm:block"
            style={{
              fontFamily: "var(--font-lora, serif)",
              color: on ? "#C9A96E" : "rgba(255,255,255,0.45)",
            }}
          >
            {on ? "Ambient On" : "Ambient Off"}
          </span>
        </div>
      </button>
    </>
  );
}
