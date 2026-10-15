import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function NotFound() {
  return <><SiteHeader /><main className="not-found wrap" id="main"><p className="eyebrow">404 · Page not found</p><h1>That path<br /><span>ends here.</span></h1><p>The page may have moved, or the address may need another look.</p><Link className="button button-bright" href="/">Return to Brand Forge <span aria-hidden="true">↗</span></Link></main><SiteFooter /></>;
}
