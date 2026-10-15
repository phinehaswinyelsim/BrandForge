import type { Metadata } from "next";
import { IconExportArtwork, OpenGraphArtwork, SocialArtwork, type SocialFormat, type SocialTemplate } from "@/components/SocialArtwork";

export const metadata: Metadata = {
  title: "Savanna Grill artwork templates",
  robots: { index: false, follow: false },
};

const templates: SocialTemplate[] = ["fire", "table", "after-hours"];
const formats: SocialFormat[] = ["square", "story"];

export default function GraphicsPage() {
  return (
    <main className="graphics-gallery">
      <header className="graphics-heading">
        <p className="eyebrow">Brand Forge · Savanna Grill</p>
        <h1>Campaign artwork templates</h1>
        <p>Six export-ready compositions. Each layout is authored in React and sized to its final canvas.</p>
      </header>
      <div className="graphics-grid">
        {templates.flatMap((template) => formats.map((format) => <SocialArtwork key={`${template}-${format}`} template={template} format={format} />))}
        <OpenGraphArtwork />
        <IconExportArtwork />
      </div>
    </main>
  );
}
