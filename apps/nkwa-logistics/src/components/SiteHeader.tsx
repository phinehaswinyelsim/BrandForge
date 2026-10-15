import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand-lockup" aria-label="Nkwa Logistics home"><Image src="/brand/logo-primary.svg" alt="Nkwa Logistics" width={250} height={68} priority /></Link>
      <nav aria-label="Main navigation">
        <Link href="/#services">Services</Link><Link href="/#quote">Get a quote</Link><Link href="/#coverage">Coverage</Link><Link href="/tracking">Tracking</Link>
      </nav>
      <Link className="header-cta" href="/tracking">Track a parcel <span aria-hidden="true">↗︎</span></Link>
    </header>
  );
}
