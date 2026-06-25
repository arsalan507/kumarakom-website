import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

// Lora — humanist serif with calligraphic brushstroke origins.
// Same organic, handmade DNA as Cormorant — both feel like they grew
// from the same Kerala backwater world, not a Swiss design studio.
// At body size it reads with warmth; at label size it has quiet authority.
// Replaces Josefin Sans (geometric/futuristic — wrong for nature/sacred positioning).
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kumarakom-invitation.com"),
  title: "Kumarakom Estates — A Rare Invitation | 14.41-Acre Vembanad Estate",
  description:
    "2,000 years of sacred history. 14.41 acres on the Vembanad backwater system. 900 ft of waterfront. 12+ licences. Zero encumbrances. Seeking a partner with vision.",
  keywords: [
    "Kumarakom resort",
    "Vembanad backwaters",
    "Kerala backwater partnership",
    "hospitality asset Kerala",
    "luxury resort partnership",
    "destination wedding venue Kerala",
    "Kumarakom real estate",
  ],
  openGraph: {
    title: "Kumarakom — A Rare Invitation, Vembanad Backwaters",
    description:
      "14.41 acres · 900 ft of Vembanad backwater frontage · zero encumbrances. Seeking one partner.",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
