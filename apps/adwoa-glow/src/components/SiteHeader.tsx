import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand-lockup" aria-label="Adwoa Glow home">
        <Image src="/brand/logo-primary.svg" alt="Adwoa Glow" width={246} height={68} priority />
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#collection">The collection</Link>
        <Link href="/#ingredients">Ingredients</Link>
        <Link href="/#story">Our story</Link>
        <Link href="/#faq">FAQ</Link>
      </nav>
      <Link className="header-cta" href="/#collection">Explore <span aria-hidden="true">↗︎</span></Link>
    </header>
  );
}
