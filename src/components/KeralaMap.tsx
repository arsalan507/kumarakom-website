export function KeralaMap() {
  return (
    <svg
      viewBox="0 0 400 560"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
      aria-label="Kerala state silhouette with Kumarakom marked"
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="rgba(138,106,59,0.10)"
            strokeWidth="1"
          />
        </pattern>
        <radialGradient id="glowKumarakom" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(138,106,59,0.45)" />
          <stop offset="100%" stopColor="rgba(138,106,59,0)" />
        </radialGradient>
      </defs>
      <rect width="400" height="560" fill="url(#grid)" />

      {/* Stylised Kerala silhouette */}
      <path
        d="M 132 30
           Q 145 70 160 110
           Q 175 150 188 190
           Q 200 240 210 290
           Q 218 340 215 380
           Q 210 420 198 458
           Q 185 495 165 525
           L 140 540
           L 120 528
           L 102 500
           L 90 460
           L 82 415
           L 76 365
           L 75 315
           L 80 260
           L 92 200
           L 108 140
           L 122 80
           Z"
        fill="rgba(44,79,74,0.10)"
        stroke="rgba(44,79,74,0.55)"
        strokeWidth="1"
      />

      <text
        x="36"
        y="280"
        fill="rgba(61,53,46,0.55)"
        fontFamily="var(--font-display)"
        fontStyle="italic"
        fontSize="11"
        letterSpacing="2"
      >
        ARABIAN SEA
      </text>

      <circle cx="142" cy="225" r="3" fill="rgba(138,106,59,0.7)" />
      <text
        x="152"
        y="229"
        fill="rgba(61,53,46,0.65)"
        fontFamily="var(--font-sans)"
        fontSize="9"
        letterSpacing="1.5"
      >
        KOCHI
      </text>

      {/* Cochin International Airport — 72 km from Kumarakom */}
      <g>
        <rect x="97" y="205" width="6" height="5" rx="1" fill="rgba(138,106,59,0.55)" />
        <line x1="100" y1="202" x2="100" y2="205" stroke="rgba(138,106,59,0.55)" strokeWidth="1" />
        <line x1="97" y1="208" x2="94" y2="208" stroke="rgba(138,106,59,0.4)" strokeWidth="0.8" strokeDasharray="2 2" />
        <line x1="103" y1="208" x2="106" y2="208" stroke="rgba(138,106,59,0.4)" strokeWidth="0.8" strokeDasharray="2 2" />
        <text
          x="92"
          y="219"
          fill="rgba(61,53,46,0.6)"
          fontFamily="var(--font-sans)"
          fontSize="7"
          letterSpacing="0.8"
          textAnchor="middle"
        >
          AIRPORT
        </text>
        <text
          x="92"
          y="227"
          fill="rgba(138,106,59,0.65)"
          fontFamily="var(--font-sans)"
          fontSize="6.5"
          textAnchor="middle"
        >
          55 km
        </text>
      </g>

      {/* Kumarakom — primary animated pin */}
      <circle cx="155" cy="270" r="22" fill="url(#glowKumarakom)">
        <animate
          attributeName="r"
          values="18;28;18"
          dur="3.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.5;1;0.5"
          dur="3.6s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="155" cy="270" r="5.5" fill="var(--brass)" />
      <circle
        cx="155"
        cy="270"
        r="9"
        fill="none"
        stroke="var(--brass)"
        strokeWidth="1"
      >
        <animate
          attributeName="r"
          values="9;14;9"
          dur="3.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0;1"
          dur="3.6s"
          repeatCount="indefinite"
        />
      </circle>
      <text
        x="170"
        y="274"
        fill="var(--brass)"
        fontFamily="var(--font-display)"
        fontStyle="italic"
        fontSize="15"
      >
        Kumarakom
      </text>
      <text
        x="170"
        y="287"
        fill="rgba(61,53,46,0.7)"
        fontFamily="var(--font-sans)"
        fontSize="8"
        letterSpacing="1.2"
      >
        VEMBANAD LAKE
      </text>

      {/* Kottayam Railway Station — 12 km from Kumarakom */}
      <g>
        <rect x="172" y="286" width="9" height="7" rx="1" fill="none" stroke="rgba(138,106,59,0.55)" strokeWidth="1" />
        <line x1="172" y1="290" x2="181" y2="290" stroke="rgba(138,106,59,0.55)" strokeWidth="0.7" />
        <circle cx="174.5" cy="293" r="1.5" fill="rgba(138,106,59,0.5)" />
        <circle cx="178.5" cy="293" r="1.5" fill="rgba(138,106,59,0.5)" />
        <text
          x="188"
          y="290"
          fill="rgba(61,53,46,0.6)"
          fontFamily="var(--font-sans)"
          fontSize="7"
          letterSpacing="0.8"
        >
          KOTTAYAM RLY
        </text>
        <text
          x="188"
          y="299"
          fill="rgba(138,106,59,0.65)"
          fontFamily="var(--font-sans)"
          fontSize="6.5"
        >
          12 km
        </text>
      </g>

      <circle cx="155" cy="455" r="3" fill="rgba(138,106,59,0.7)" />
      <text
        x="165"
        y="459"
        fill="rgba(61,53,46,0.65)"
        fontFamily="var(--font-sans)"
        fontSize="9"
        letterSpacing="1.5"
      >
        THIRUVANANTHAPURAM
      </text>

      {/* Vembanad Lake — shown as a teal water body east of the coastline */}
      <ellipse
        cx="175"
        cy="270"
        rx="28"
        ry="55"
        fill="rgba(44,134,124,0.12)"
        stroke="rgba(44,134,124,0.35)"
        strokeWidth="1"
      />
      <text
        x="215"
        y="250"
        fill="rgba(44,134,124,0.6)"
        fontFamily="var(--font-display)"
        fontStyle="italic"
        fontSize="8"
        letterSpacing="0.5"
      >
        Vembanad
      </text>
      <text
        x="218"
        y="260"
        fill="rgba(44,134,124,0.6)"
        fontFamily="var(--font-display)"
        fontStyle="italic"
        fontSize="8"
        letterSpacing="0.5"
      >
        Lake
      </text>

      {/* Backwater flow lines (teal — the single jewel accent) */}
      <path
        d="M 110 260 Q 140 270 170 280 Q 200 285 230 280"
        fill="none"
        stroke="var(--teal)"
        strokeOpacity="0.6"
        strokeWidth="1"
        strokeDasharray="2 6"
        strokeLinecap="round"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;-16"
          dur="6s"
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M 130 290 Q 165 300 195 305"
        fill="none"
        stroke="var(--teal)"
        strokeOpacity="0.45"
        strokeWidth="1"
        strokeDasharray="2 6"
        strokeLinecap="round"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;-16"
          dur="8s"
          repeatCount="indefinite"
        />
      </path>

      <text
        x="200"
        y="540"
        fill="rgba(61,53,46,0.55)"
        fontFamily="var(--font-display)"
        fontStyle="italic"
        fontSize="11"
        textAnchor="middle"
      >
        Arabian Sea — 44 Rivers — Vembanad Backwaters
      </text>
    </svg>
  );
}
