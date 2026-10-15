import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const displayFont = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const bodyFont = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: "Nkwa Logistics | Move what matters", template: "%s | " + siteConfig.name },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_GH", siteName: siteConfig.name, title: "Nkwa Logistics | Move what matters", description: siteConfig.description, url: "/", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Nkwa Logistics route network concept" }] },
  twitter: { card: "summary_large_image", title: "Nkwa Logistics", description: siteConfig.description, images: ["/og-image.png"] },
  icons: { icon: [{ url: "/brand/favicon.svg", type: "image/svg+xml" }, { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" }], apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180", type: "image/png" }] },
};

export const viewport: Viewport = { themeColor: "#0B3D2E" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GH"><body className={displayFont.variable + " " + bodyFont.variable}><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>;
}
