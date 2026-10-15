import Image from "next/image";

export type SocialTemplate = "on-the-move" | "across-ghana" | "there-on-time";
export type SocialFormat = "square" | "story";

const campaigns: Record<SocialTemplate, { tag: string; title: string[]; body: string; footer: string }> = {
  "on-the-move": { tag: "READY WHEN YOU ARE", title: ["Life keeps", "moving."], body: "Keep the next important thing on its way.", footer: "LOCAL DELIVERY / CONCEPT" },
  "across-ghana": { tag: "TOWNS CONNECTED", title: ["One route", "at a time."], body: "From Tarkwa through Takoradi, Accra, and Kumasi.", footer: "A GHANAIAN LOGISTICS CONCEPT" },
  "there-on-time": { tag: "THE LITTLE DETAILS MATTER", title: ["There when", "it matters."], body: "Clear steps from pickup to handoff.", footer: "NKWA LOGISTICS / CONCEPT" },
};

function RouteArtwork() {
  return <svg className="social-route-art" viewBox="0 0 420 340" fill="none" aria-hidden="true"><path d="M54 258 153 220 240 112 352 170" stroke="currentColor" strokeWidth="2" strokeDasharray="8 10"/><path d="M54 258 153 220 240 112" stroke="#FFB703" strokeWidth="5"/><circle cx="54" cy="258" r="15" fill="#FFB703"/><circle cx="153" cy="220" r="12" fill="currentColor"/><circle cx="240" cy="112" r="17" fill="#FFB703"/><circle cx="352" cy="170" r="13" fill="currentColor"/><circle cx="54" cy="258" r="30" stroke="currentColor" opacity=".25"/><circle cx="240" cy="112" r="32" stroke="currentColor" opacity=".25"/></svg>;
}

export function SocialArtwork({ template, format }: { template: SocialTemplate; format: SocialFormat }) {
  const campaign = campaigns[template];
  const dimensions = format === "square" ? { width: 1080, height: 1080 } : { width: 1080, height: 1350 };
  return (
    <article className={"social-canvas social-canvas--" + template + " social-canvas--" + format} style={dimensions} data-art={"nkwa-logistics-" + template + "-" + format} aria-label={campaign.tag + ": " + campaign.title.join(" ") + " (" + dimensions.width + " by " + dimensions.height + ")"}>
      <span className="social-topline"><i />{campaign.tag}</span>
      <RouteArtwork />
      <div className="social-copy"><span className="social-kicker">NKWA / GHANA</span><h2>{campaign.title.map((line) => <span key={line}>{line}</span>)}</h2><p>{campaign.body}</p><span className="social-rule" /><span className="social-footer">{campaign.footer}</span></div>
      <Image className="social-wordmark" src={template === "on-the-move" ? "/brand/logo-reversed.svg" : "/brand/logo-one-colour.svg"} alt="Nkwa Logistics" width={250} height={68} />
      <span className="social-index">N / 0{template === "on-the-move" ? "1" : template === "across-ghana" ? "2" : "3"}</span>
    </article>
  );
}

export function OpenGraphArtwork() {
  return <article className="og-canvas" data-art="nkwa-logistics-open-graph" aria-label="Nkwa Logistics Open Graph image"><span className="og-glow" aria-hidden="true" /><div className="og-copy"><span className="og-kicker">GHANA / MOVE WHAT MATTERS</span><h2>Life keeps<br /><em>moving.</em></h2><p>Clear, dependable logistics for the next important thing.</p></div><RouteArtwork /><Image className="og-wordmark" src="/brand/logo-reversed.svg" alt="Nkwa Logistics" width={250} height={68} /></article>;
}

export function IconExportArtwork() {
  return <div className="icon-export-set" aria-hidden="true"><span data-art="nkwa-logistics-favicon-32" className="icon-export icon-export--32"><Image src="/brand/icon.svg" alt="" width={32} height={32} /></span><span data-art="nkwa-logistics-apple-icon" className="icon-export icon-export--180"><Image src="/brand/icon.svg" alt="" width={180} height={180} /></span></div>;
}
