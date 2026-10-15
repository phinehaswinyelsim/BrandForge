import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand-lockup" href="/" aria-label="Savanna Grill home">
        <Image src="/brand/logo-primary.svg" alt="Savanna Grill" width={220} height={41} priority />
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#menu">Menu</Link>
        <Link href="/#story">Our mood</Link>
        <Link className="nav-location" href="/#visit">Find us <span aria-hidden="true">↗</span></Link>
      </nav>
    </header>
  );
}
