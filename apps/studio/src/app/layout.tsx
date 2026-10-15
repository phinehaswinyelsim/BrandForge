import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const displayFont = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const bodyFont = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: "Brand Forge — Make your next move matter", template: "%s | Brand Forge" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_GH", siteName: "Brand Forge", title: "Brand Forge — Make your next move matter", description: siteConfig.description, url: "/", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Brand Forge creative studio in Ghana" }] },
  twitter: { card: "summary_large_image", title: "Brand Forge — Make your next move matter", description: siteConfig.description, images: ["/og-image.png"] },
  icons: { icon: [{ url: "/brand/favicon.svg", type: "image/svg+xml" }, { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" }], apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180", type: "image/png" }] },
};

export const viewport: Viewport = { themeColor: "#11111D" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = { "@context": "https://schema.org", "@type": "Organization", name: siteConfig.name, description: siteConfig.description, url: siteConfig.siteUrl, email: siteConfig.email, address: { "@type": "PostalAddress", addressCountry: "GH", addressRegion: "Ghana" } };
  return <html lang="en-GH"><body className={`${displayFont.variable} ${bodyFont.variable}`}><a className="skip-link" href="#main">Skip to content</a>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} /></body></html>;
}
