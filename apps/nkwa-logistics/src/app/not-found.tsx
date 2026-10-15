import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function NotFound() {
  return <><SiteHeader /><main id="main" className="not-found"><p className="eyebrow">Route not found</p><h1>This route<br /><em>isn’t on the map.</em></h1><p>Let’s take you back to the main Nkwa route.</p><Link className="button button-amber" href="/">Return to Nkwa <span aria-hidden="true">↗︎</span></Link></main><SiteFooter /></>;
}
