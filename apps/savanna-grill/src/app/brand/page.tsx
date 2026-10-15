import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { brandGuidelines } from "@/content/brand";

export const metadata: Metadata = {
  title: "Brand guide",
  description: "Savanna Grill logo, palette, typography, and usage notes.",
  alternates: { canonical: "/brand" },
  openGraph: {
    title: "Savanna Grill brand guide",
    description: "A compact guide to the Savanna Grill concept identity.",
    url: "/brand",
    images: ["/og-image.png"],
  },
};

export default function BrandPage() {
  return (
    <div className="brand-page">
      <SiteHeader />
      <main id="main">
        <section className="brand-hero">
          <p className="eyebrow">Identity field notes / 01</p>
          <h1>Fire.<br /><em>Flavour.</em><br />Friends.</h1>
          <p>{brandGuidelines.concept}</p>
        </section>

        <section className="section-pad brand-guidelines-grid" aria-labelledby="logo-heading">
          <div>
            <p className="eyebrow">01 / Mark</p>
            <h2 id="logo-heading">A little ember.<br />A place to gather.</h2>
            <div className="logo-specimen"><Image src="/brand/logo-primary.svg" alt="Savanna Grill primary logo" width={440} height={82} /></div>
            <div className="clear-space-demo">
              <Image src="/brand/logo-reversed.svg" alt="Savanna Grill reversed logo demonstrating clear space" width={330} height={62} />
              <span className="clear-space-label">CLEAR SPACE = FLAME HEIGHT</span>
            </div>
            <p className="concept-note"><strong>Clear space:</strong> {brandGuidelines.clearSpace}</p>
            <div className="logo-downloads" aria-label="Logo file variants">
              <a href="/brand/logo-primary.svg" download>Primary SVG <span>↓</span></a>
              <a href="/brand/logo-one-colour.svg" download>One-colour SVG <span>↓</span></a>
              <a href="/brand/logo-reversed.svg" download>Reversed SVG <span>↓</span></a>
              <a href="/brand/icon.svg" download>Icon SVG <span>↓</span></a>
            </div>
          </div>

          <div>
            <p className="eyebrow">02 / Colour and type</p>
            <h2>Warmth with<br />a dark edge.</h2>
            <div className="palette-list" aria-label="Savanna Grill colour palette">
              {brandGuidelines.palette.map((color) => (
                <div className="palette-row" key={color.hex}>
                  <span className="palette-swatch" style={{ backgroundColor: color.hex }} aria-hidden="true" />
                  <span className="palette-copy"><strong>{color.name}</strong><span>{color.role}</span></span>
                  <code className="palette-code">{color.hex}</code>
                </div>
              ))}
            </div>
            <div className="type-specimen">
              {brandGuidelines.typography.map((type) => (
                <div className="type-row" key={type.role}>
                  <span>{type.role} / {type.family}</span>
                  <strong className={type.role === "Display" ? "type-display" : "type-sans"}>{type.role === "Display" ? "FIRE / FLAVOUR" : "A table with room for one more."}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="usage-columns">
            <section className="usage-box" aria-labelledby="dos-title">
              <h3 id="dos-title">Do</h3>
              <ul>{brandGuidelines.do.map((rule) => <li key={rule}>{rule}</li>)}</ul>
            </section>
            <section className="usage-box" aria-labelledby="donts-title">
              <h3 id="donts-title">Don’t</h3>
              <ul>{brandGuidelines.dont.map((rule) => <li key={rule}>{rule}</li>)}</ul>
            </section>
          </div>
          <p className="concept-note brand-concept-note">Concept project by Brand Forge, not a real business. Menu, hours, contact details, and address are illustrative placeholders.</p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
