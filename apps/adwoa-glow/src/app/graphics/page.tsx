import type { Metadata } from "next";
import { IconExportArtwork, OpenGraphArtwork, SocialArtwork, type SocialFormat, type SocialTemplate } from "@/components/SocialArtwork";

export const metadata: Metadata = { title: "Campaign artwork templates", robots: { index: false, follow: false } };
const templates: SocialTemplate[] = ["ritual", "ingredients", "daily-glow"];
const formats: SocialFormat[] = ["square", "story"];

export default function GraphicsPage() {
  return (
    <main className="graphics-gallery">
      <header><p className="eyebrow">Brand Forge · Adwoa Glow</p><h1>Campaign artwork</h1><p>Six final-size campaign compositions, the social image, and app icons.</p></header>
      <div className="graphics-grid">{templates.flatMap((template) => formats.map((format) => <SocialArtwork key={template + format} template={template} format={format} />))}<OpenGraphArtwork /><IconExportArtwork /></div>
    </main>
  );
}
