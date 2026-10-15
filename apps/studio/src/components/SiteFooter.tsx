import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { homeContent } from "@/content/home";

export function SiteFooter() {
  const hasWhatsApp = /^\d{10,15}$/.test(siteConfig.whatsappNumber);
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link className="wordmark" href="/" aria-label="Brand Forge home">
          <Image src="/brand/brand-forge-mark.svg" alt="" width={34} height={34} />
          <span>BRAND <b>FORGE</b></span>
        </Link>
        <p>{homeContent.footer.line}</p>
        <a href="#main">{homeContent.footer.backToTop} ↑</a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Brand Forge · Ghana</span>
        <div className="footer-links">
          <a href={`mailto:${siteConfig.email}`}>{homeContent.footer.email}</a>
          {hasWhatsApp ? <a href={`https://wa.me/${siteConfig.whatsappNumber}`}>{homeContent.footer.whatsapp}</a> : <Link href="/#contact">{homeContent.footer.whatsapp}</Link>}
          {siteConfig.socials.instagram ? <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer">Instagram</a> : null}
          {siteConfig.socials.linkedin ? <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> : null}
        </div>
      </div>
    </footer>
  );
}
