import type { Metadata } from "next";
import { IconExportArtwork, OpenGraphArtwork, SocialArtwork, type SocialFormat, type SocialTemplate } from "@/components/SocialArtwork";

export const metadata: Metadata = { title: "Campaign artwork templates", robots: { index: false, follow: false } };
const templates: SocialTemplate[] = ["on-the-move", "across-ghana", "there-on-time"];
const formats: SocialFormat[] = ["square", "story"];

export default function GraphicsPage() {
  return <main className="graphics-gallery"><header><p className="eyebrow">Brand Forge / Nkwa Logistics</p><h1>Routes in motion.</h1><p>Six campaign compositions at their final sizes, plus the Open Graph art and app icons.</p></header><div className="graphics-grid">{templates.flatMap((template) => formats.map((format) => <SocialArtwork key={template + format} template={template} format={format} />))}<OpenGraphArtwork /><IconExportArtwork /></div></main>;
}
