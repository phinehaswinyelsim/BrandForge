import type { Metadata, Viewport } from "next";
import { Anton, DM_Sans } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const displayFont = Anton({ subsets: ["latin"], weight: "400", variable: "--font-display", display: "swap" });
const bodyFont = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: "Savanna Grill | Fire. Flavour. Friends.", template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GH",
    siteName: siteConfig.name,
    title: "Savanna Grill | Fire. Flavour. Friends.",
    description: siteConfig.description,
    url: "/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Savanna Grill - Fire. Flavour. Friends." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Savanna Grill | Fire. Flavour. Friends.",
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = { themeColor: "#1A1613" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
