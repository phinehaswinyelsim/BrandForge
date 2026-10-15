import Image from "next/image";

export type SocialTemplate = "fire" | "table" | "after-hours";
export type SocialFormat = "square" | "story";

const artwork: Record<SocialTemplate, { label: string; headline: string; accent: string; body: string; footer: string }> = {
  fire: {
    label: "THE FIRE IS ON",
    headline: "Good things\nhappen over fire.",
    accent: "fire",
    body: "Charcoal favourites, bright pepper, and another round for the table.",
    footer: "A GRILL CONCEPT FROM TARKWA",
  },
  table: {
    label: "SAVE A SEAT",
    headline: "There’s always\nroom for one more.",
    accent: "table",
    body: "Pass the kelewele. Pour the sobolo. Stay for the story.",
    footer: "FIRE. FLAVOUR. FRIENDS.",
  },
  "after-hours": {
    label: "WHEN THE DAY SLOWS DOWN",
    headline: "Meet me\nat the grill.",
    accent: "after-hours",
    body: "From the first sizzle to the last good bite, make an evening of it.",
    footer: "TARKWA · GHANA",
  },
};

function EmberIllustration({ variant }: { variant: SocialTemplate }) {
  return (
    <div className={`ember-illustration ember-illustration--${variant}`} aria-hidden="true">
      {variant === "table" ? (
        <svg viewBox="0 0 420 420" fill="none">
          <circle cx="210" cy="210" r="164" stroke="currentColor" strokeWidth="2" opacity=".42" />
          <circle cx="210" cy="210" r="137" stroke="currentColor" strokeWidth="2" />
          <circle cx="210" cy="210" r="95" fill="#E8531C" />
          <path d="M210 115c21 31 47 42 47 80a47 47 0 0 1-94 0c0-33 27-56 47-80Z" fill="#FFF4E0" />
          <path d="M125 203h-18m206 0h-18M210 92v-18m0 272v-18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 420 420" fill="none">
          <circle cx="210" cy="210" r="166" stroke="currentColor" strokeWidth="1" opacity=".35" />
          <circle cx="210" cy="210" r="124" fill="#F2A93B" />
          <path d="M215 66c14 61-48 78-49 146-1 48 25 79 68 79 49 0 83-37 83-87 0-39-25-69-63-106 8 51-13 72-37 90 5-45 33-74-2-122Z" fill="#E8531C" />
          <path d="M91 336h239M112 352h197M142 369h138" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <circle cx="328" cy="91" r="13" fill="#FFF4E0" />
        </svg>
      )}
    </div>
  );
}

export function SocialArtwork({ template, format }: { template: SocialTemplate; format: SocialFormat }) {
  const item = artwork[template];
  const wordmark = template === "table" ? "/brand/logo-one-colour.svg" : "/brand/logo-reversed.svg";
  const dimensions = format === "square" ? { width: 1080, height: 1080 } : { width: 1080, height: 1350 };

  return (
    <article
      className={`social-canvas social-canvas--${item.accent} social-canvas--${format}`}
      style={dimensions}
      data-art={`savanna-grill-${template}-${format}`}
      aria-label={`${item.label}: ${item.headline.replace("\n", " ")} (${dimensions.width} by ${dimensions.height})`}
    >
      <div className="social-topline"><span>{item.label}</span><span>SG / 01</span></div>
      <EmberIllustration variant={template} />
      <div className="social-content">
        <h2>{item.headline.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
        <p>{item.body}</p>
        <div className="social-rule" />
        <span className="social-footer-line">{item.footer}</span>
      </div>
      <Image className="social-wordmark" src={wordmark} alt="Savanna Grill" width={290} height={54} />
      <span className="social-index">
        TARKWA / GHANA
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.8v20.4M1.8 12h20.4M4.8 4.8l14.4 14.4M19.2 4.8 4.8 19.2" /></svg>
      </span>
    </article>
  );
}

export function OpenGraphArtwork() {
  return (
    <article className="og-canvas" data-art="savanna-grill-open-graph" aria-label="Savanna Grill open graph image">
      <div className="og-glow" aria-hidden="true" />
      <div className="og-copy">
        <span className="social-topline-label">TARKWA, GHANA · GRILL AND GATHER</span>
        <h2>Fire.<br />Flavour.<br /><em>Friends.</em></h2>
        <p>A warm table. A little smoke in the air. Room for one more.</p>
      </div>
      <div className="og-emblem" aria-hidden="true"><EmberIllustration variant="fire" /></div>
      <Image className="og-wordmark" src="/brand/logo-reversed.svg" alt="Savanna Grill" width={265} height={50} />
    </article>
  );
}

export function IconExportArtwork() {
  return (
    <div className="icon-export-set" aria-hidden="true">
      <span data-art="savanna-grill-favicon-32" className="icon-export icon-export--32"><Image src="/brand/icon.svg" alt="" width={32} height={32} /></span>
      <span data-art="savanna-grill-apple-icon" className="icon-export icon-export--180"><Image src="/brand/icon.svg" alt="" width={180} height={180} /></span>
    </div>
  );
}
