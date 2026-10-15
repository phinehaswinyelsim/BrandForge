import Link from "next/link";
import Image from "next/image";
import { homeContent } from "@/content/home";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Brand Forge home">
        <Image src="/brand/brand-forge-mark.svg" alt="" width={38} height={38} />
        <span>BRAND <b>FORGE</b></span>
      </Link>
      <nav aria-label="Main navigation">
        {homeContent.navigation.links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
      </nav>
      <Link className="header-cta" href="/#contact">{homeContent.navigation.action} <span aria-hidden="true">↗</span></Link>
    </header>
  );
}
