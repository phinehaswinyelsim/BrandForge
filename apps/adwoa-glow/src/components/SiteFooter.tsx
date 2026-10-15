import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { whatsappHref } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Image src="/brand/logo-reversed.svg" alt="Adwoa Glow" width={246} height={68} />
          <p>Rooted in ritual. Made for your everyday.</p>
        </div>
        <div className="footer-links">
          <span className="footer-label">Say hello</span>
          <a href={whatsappHref("Hello Adwoa Glow. I would like to ask about the concept range.")}>WhatsApp enquiry ↗︎</a>
          <a href={"mailto:" + siteConfig.email}>{siteConfig.email}</a>
          <span>Phone: {siteConfig.phone}</span>
          <span>{siteConfig.address}</span>
          <span>{siteConfig.hours}</span>
        </div>
        <div className="footer-links">
          <span className="footer-label">Explore</span>
          <Link href="/#collection">The collection</Link>
          <Link href="/#ingredients">Ingredients</Link>
          <Link href="/brand">Brand notes</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Adwoa Glow</span>
        <span>Concept project by Brand Forge, not a real business.</span>
        <a href="#top">Back to the beginning ↑︎</a>
      </div>
    </footer>
  );
}
