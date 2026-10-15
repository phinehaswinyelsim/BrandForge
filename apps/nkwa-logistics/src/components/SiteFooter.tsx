import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { whatsappHref } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand"><Image src="/brand/logo-reversed.svg" alt="Nkwa Logistics" width={250} height={68} /><p>Move what matters.<br />Keep life moving.</p></div>
        <div className="footer-links"><span className="footer-label">Talk to the team</span><a href={whatsappHref("Hello Nkwa Logistics. I would like to ask about a delivery.")}>WhatsApp enquiry ↗︎</a><a href={"mailto:" + siteConfig.email}>{siteConfig.email}</a><span>Phone: {siteConfig.phone}</span><span>{siteConfig.address}</span></div>
        <div className="footer-links"><span className="footer-label">Quick routes</span><Link href="/#services">Our services</Link><Link href="/#quote">Quote calculator</Link><Link href="/tracking">Sample tracking</Link><span>{siteConfig.hours}</span></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Nkwa Logistics</span><span>Concept project by Brand Forge, not a real business.</span><Link href="#top">Back to the top ↑︎</Link></div>
    </footer>
  );
}
