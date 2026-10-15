import Image from "next/image";

export type SocialTemplate = "ritual" | "ingredients" | "daily-glow";
export type SocialFormat = "square" | "story";

const campaigns: Record<SocialTemplate, { tag: string; title: string[]; body: string; footer: string }> = {
  ritual: { tag: "A MOMENT TO YOURSELF", title: ["Slow down.", "Come back."], body: "Small rituals can make a little room for you again.", footer: "THE DAILY RITUAL SERIES" },
  ingredients: { tag: "ROOTED IN BOTANICALS", title: ["A softer", "kind of care."], body: "Shea, cocoa, and the ingredients that feel like home.", footer: "INSPIRED BY GHANA" },
  "daily-glow": { tag: "YOUR SKIN, YOUR STORY", title: ["The glow", "is already yours."], body: "Care that meets you where you are, one quiet step at a time.", footer: "ADWOA GLOW · CONCEPT" },
};

function BotanicalMark({ pale = false }: { pale?: boolean }) {
  return (
    <svg className={pale ? "botanical-mark botanical-mark--pale" : "botanical-mark"} viewBox="0 0 420 420" fill="none" aria-hidden="true">
      <circle cx="210" cy="210" r="169" stroke="currentColor" strokeWidth="1" opacity=".3" />
      <circle cx="210" cy="210" r="139" stroke="currentColor" strokeWidth="1.5" opacity=".65" />
      <path d="M210 88c-55 49-73 103-48 141 14 22 36 27 48 60 13-33 35-38 49-60 25-38 7-92-49-141Z" fill="currentColor" opacity=".25" />
      <path d="M210 111c-18 53-8 92 0 131 8-39 18-78 0-131Z" fill="currentColor" />
      <path d="M210 236c-42 19-62 52-66 87 35-6 65-30 66-87Zm0 0c42 19 62 52 66 87-35-6-65-30-66-87Z" fill="currentColor" opacity=".7" />
      <circle cx="210" cy="210" r="7" fill="currentColor" />
    </svg>
  );
}

export function SocialArtwork({ template, format }: { template: SocialTemplate; format: SocialFormat }) {
  const campaign = campaigns[template];
  const dimensions = format === "square" ? { width: 1080, height: 1080 } : { width: 1080, height: 1350 };
  const logo = template === "daily-glow" ? "/brand/logo-reversed.svg" : "/brand/logo-primary.svg";
  return (
    <article
      className={"social-canvas social-canvas--" + template + " social-canvas--" + format}
      style={dimensions}
      data-art={"adwoa-glow-" + template + "-" + format}
      aria-label={campaign.tag + ": " + campaign.title.join(" ") + " (" + dimensions.width + " by " + dimensions.height + ")"}
    >
      <span className="social-topline">{campaign.tag}</span>
      <BotanicalMark pale={template === "daily-glow"} />
      <div className="social-copy">
        <p className="social-kicker">ADWOA GLOW / GHANA</p>
        <h2>{campaign.title.map((line) => <span key={line}>{line}</span>)}</h2>
        <p className="social-body">{campaign.body}</p>
        <span className="social-rule" />
        <span className="social-footer">{campaign.footer}</span>
      </div>
      <Image className="social-wordmark" src={logo} alt="Adwoa Glow" width={246} height={68} />
      <span className="social-number">A / G <i>0{template === "ritual" ? "1" : template === "ingredients" ? "2" : "3"}</i></span>
    </article>
  );
}

export function OpenGraphArtwork() {
  return (
    <article className="og-canvas" data-art="adwoa-glow-open-graph" aria-label="Adwoa Glow open graph image">
      <span className="og-glow" aria-hidden="true" />
      <div className="og-copy">
        <span className="og-kicker">GHANAIAN ROOTS · EVERYDAY RITUAL</span>
        <h2>Come back<br />to your <em>glow.</em></h2>
        <p>A softer kind of skincare story, inspired by the rituals we return to.</p>
      </div>
      <div className="og-art" aria-hidden="true"><BotanicalMark /></div>
      <Image className="og-wordmark" src="/brand/logo-reversed.svg" alt="Adwoa Glow" width={246} height={68} />
    </article>
  );
}

export function IconExportArtwork() {
  return (
    <div className="icon-export-set" aria-hidden="true">
      <span data-art="adwoa-glow-favicon-32" className="icon-export icon-export--32"><Image src="/brand/icon.svg" alt="" width={32} height={32} /></span>
      <span data-art="adwoa-glow-apple-icon" className="icon-export icon-export--180"><Image src="/brand/icon.svg" alt="" width={180} height={180} /></span>
    </div>
  );
}
