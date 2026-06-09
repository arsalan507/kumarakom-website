import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kumarakom-invitation.com"),
  title: "Kumarakom — A Rare Invitation | 14.41-Acre Vembanad Lakefront Estate",
  description:
    "A generational waterfront asset on the backwaters of Vembanad Lake. 14.41 acres · 900 ft waterfront · zero encumbrances. Presented to a discerning circle of investors and world-class operators.",
  keywords: [
    "Kumarakom resort",
    "Vembanad Lake",
    "Kerala backwater investment",
    "hospitality asset Kerala",
    "luxury resort acquisition",
    "boutique hotel operator partnership",
    "Kumarakom real estate",
  ],
  openGraph: {
    title: "Kumarakom — A Rare Invitation",
    description:
      "14.41 acres · 900 ft of Vembanad Lake waterfront · zero encumbrances. A private placement.",
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
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
