import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { brand } from "@/content/brand";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Brand notes",
  description: "The Adwoa Glow logo, palette, typography, and usage guidance.",
  alternates: { canonical: "/brand" },
  robots: { index: false, follow: true },
};

export default function BrandPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="brand-page">
        <section className="brand-hero"><p className="eyebrow">Brand Forge · Identity notes</p><h1>Rooted in ritual.<br /><em>Made to glow.</em></h1><p>{brand.concept}</p><Link className="text-link" href="/">Return to the site <span aria-hidden="true">↗︎</span></Link></section>
        <section className="brand-guide section-pad">
          <div className="brand-column">
            <p className="eyebrow">01 / The mark</p><h2>A quiet sign<br />of care.</h2>
            <div className="logo-specimen logo-specimen--light"><Image src="/brand/logo-primary.svg" alt="Adwoa Glow primary logo" width={280} height={78} /></div>
            <div className="logo-specimen logo-specimen--dark"><Image src="/brand/logo-reversed.svg" alt="Adwoa Glow reversed logo" width={280} height={78} /></div>
            <p className="guide-copy">{brand.clearSpace}</p>
            <div className="logo-downloads"><a href="/brand/logo-primary.svg" download>Primary SVG</a><a href="/brand/logo-one-colour.svg" download>One-colour SVG</a><a href="/brand/logo-reversed.svg" download>Reversed SVG</a><a href="/brand/icon.svg" download>Icon SVG</a><a href="/brand/favicon.svg" download>Favicon SVG</a></div>
          </div>
          <div className="brand-column">
            <p className="eyebrow">02 / The palette</p><h2>Warmth with<br />room to breathe.</h2>
            <div className="palette-list">{brand.colors.map((color) => <div className="palette-row" key={color.hex}><span className="palette-swatch" style={{ backgroundColor: color.hex }} /><span className="palette-copy"><strong>{color.name}</strong><small>{color.role}</small></span><code>{color.hex}</code></div>)}</div>
            <div className="type-specimen"><p className="eyebrow">03 / Typography</p>{brand.typography.map((font) => <div className="type-row" key={font.family}><span>{font.role}</span><strong className={font.role === "Display" ? "type-display" : "type-sans"}>{font.family}</strong><small>{font.use}</small></div>)}</div>
          </div>
          <div className="brand-column brand-column--full">
            <p className="eyebrow">04 / Usage</p><h2>Keep it considered.</h2>
            <div className="usage-columns"><div className="usage-box"><h3>Do</h3><ul>{brand.do.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="usage-box usage-box--soft"><h3>Don’t</h3><ul>{brand.dont.map((item) => <li key={item}>{item}</li>)}</ul></div></div>
            <p className="concept-note">Concept project by Brand Forge, not a real business. Product names, prices, ingredient lists, and brand claims are illustrative and require owner, safety, and regulatory review before real use.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
