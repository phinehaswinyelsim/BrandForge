import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Brand notes",
  description: "The Nkwa Logistics logo, palette, typography, and usage guidance.",
  alternates: { canonical: "/brand" },
  robots: { index: false, follow: true },
};

const colors = [
  { name: "Forest", hex: "#0B3D2E", role: "Trust, primary surfaces, and key contrast" },
  { name: "Signal amber", hex: "#FFB703", role: "Action, route markers, and wayfinding" },
  { name: "Off-white", hex: "#F6F5EF", role: "Open space and practical reading surfaces" },
  { name: "Charcoal", hex: "#14241E", role: "Body copy and deep contrast" },
];

export default function BrandPage() {
  return <><SiteHeader /><main id="main" className="brand-page"><section className="brand-hero"><p className="eyebrow">Brand Forge / Identity notes</p><h1>Steady by nature.<br /><em>Ready to move.</em></h1><p>A confident logistics identity that uses clear routes, purposeful movement, and a signal of amber to guide the way.</p><Link className="text-link" href="/">Return to the site <span aria-hidden="true">↗︎</span></Link></section><section className="brand-guide section-pad"><div className="brand-column"><p className="eyebrow">01 / The mark</p><h2>Built to<br />keep moving.</h2><div className="logo-specimen logo-specimen--light"><Image src="/brand/logo-primary.svg" alt="Nkwa Logistics primary logo" width={290} height={76} /></div><div className="logo-specimen logo-specimen--dark"><Image src="/brand/logo-reversed.svg" alt="Nkwa Logistics reversed logo" width={290} height={76} /></div><p className="guide-copy">Keep clear space around the route mark equal to the height of its amber signal point.</p><div className="logo-downloads"><a href="/brand/logo-primary.svg" download>Primary SVG</a><a href="/brand/logo-one-colour.svg" download>One-colour SVG</a><a href="/brand/logo-reversed.svg" download>Reversed SVG</a><a href="/brand/icon.svg" download>Icon SVG</a><a href="/brand/favicon.svg" download>Favicon SVG</a></div></div><div className="brand-column"><p className="eyebrow">02 / Palette and type</p><h2>Direct.<br />Clear. Alive.</h2><div className="palette-list">{colors.map((color) => <div className="palette-row" key={color.hex}><span className="palette-swatch" style={{ backgroundColor: color.hex }} /><span className="palette-copy"><strong>{color.name}</strong><small>{color.role}</small></span><code>{color.hex}</code></div>)}</div><div className="type-specimen"><div className="type-row"><span>Display</span><strong className="type-display">Space Grotesk</strong><small>Headlines, route labels, and confident short statements</small></div><div className="type-row"><span>Everyday</span><strong className="type-sans">Inter</strong><small>Service details, forms, and functional reading</small></div></div></div><div className="brand-column brand-column--full"><p className="eyebrow">03 / Use with care</p><h2>Keep the signal clear.</h2><div className="usage-columns"><div className="usage-box"><h3>Do</h3><ul><li>Use the amber signal color for a few clear actions.</li><li>Keep route graphics schematic and label them not to scale.</li><li>Use the light logo on forest or the forest mark on off-white.</li></ul></div><div className="usage-box usage-box--soft"><h3>Don’t</h3><ul><li>Do not stretch, rotate, or add effects to the route mark.</li><li>Do not imply live tracking, confirmed schedules, or service coverage.</li><li>Do not present sample distances or rates as final operating data.</li></ul></div></div><p className="concept-note">Concept project by Brand Forge, not a real business. This guide and the service details are design demonstrations only.</p></div></section></main><SiteFooter /></>;
}
