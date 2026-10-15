import type { Metadata, Viewport } from "next";
import { Fraunces, Jost } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const displayFont = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const bodyFont = Jost({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: "Adwoa Glow | Come back to your own glow", template: "%s | " + siteConfig.name },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "en_GH", siteName: siteConfig.name,
    title: "Adwoa Glow | Come back to your own glow", description: siteConfig.description,
    url: "/", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Adwoa Glow botanical skincare concept" }],
  },
  twitter: { card: "summary_large_image", title: "Adwoa Glow", description: siteConfig.description, images: ["/og-image.png"] },
  icons: {
    icon: [{ url: "/brand/favicon.svg", type: "image/svg+xml" }, { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = { themeColor: "#3A211D" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GH">
      <body className={displayFont.variable + " " + bodyFont.variable}>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
