import { siteConfig } from "@/config/site";

const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}`;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <p className="footer-brand">Savanna<span> Grill</span></p>
        <p>Fire. Flavour. Friends.</p>
        <div className="footer-links">
          <a href={whatsappUrl}>WhatsApp</a>
          <a href={`tel:${siteConfig.phone}`}>Call us</a>
          <a href={`mailto:${siteConfig.email}`}>Email</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Savanna Grill concept</span>
        <span>Concept project by Brand Forge, not a real business.</span>
        <a href="/brand">Brand notes <span aria-hidden="true">↗</span></a>
      </div>
    </footer>
  );
}
