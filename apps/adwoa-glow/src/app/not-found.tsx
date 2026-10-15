import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <><SiteHeader /><main id="main" className="not-found"><p className="eyebrow">A little detour</p><h1>This page has<br /><em>drifted away.</em></h1><p>Let’s take you back to the rituals and the things that are right here.</p><Link className="button button-primary" href="/">Back to Adwoa Glow <span aria-hidden="true">↗︎</span></Link></main><SiteFooter /></>
  );
}
