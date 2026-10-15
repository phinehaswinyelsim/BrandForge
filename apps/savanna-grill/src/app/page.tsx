import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Flame, MapPin, Utensils } from "lucide-react";
import { OpenStatus } from "@/components/OpenStatus";
import { Menu } from "@/components/Menu";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/config/site";
import { homeContent } from "@/content/home";

export default function HomePage() {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    servesCuisine: ["Ghanaian", "Grill"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tarkwa",
      addressRegion: "Western Region",
      addressCountry: "GH",
    },
    openingHours: "Mo-Su 11:00-22:00",
    hasMenu: `${siteConfig.siteUrl}/#menu`,
  };
  const schemaText = JSON.stringify(restaurantSchema).replace(/</g, "\\u003c");
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapQuery)}`;

  return (
    <>
      <SiteHeader />
      <main id="main">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaText }} />
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grain" aria-hidden="true" />
          <div className="hero-copy">
            <div className="hero-eyebrow"><span className="hero-pin"><MapPin size={14} aria-hidden="true" /> Tarkwa, Ghana</span><span className="hero-separator" /><span>Grill and gather</span></div>
            <h1 id="hero-title">Bring your people.<br /><em>We’ll bring the fire.</em></h1>
            <p>{homeContent.description}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#menu"><span>{homeContent.primaryAction}</span><ArrowDownRight size={19} aria-hidden="true" /></a>
              <a className="text-link" href="#story">{homeContent.secondaryAction}<ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
            <div className="hero-hours"><OpenStatus /><span>{siteConfig.hours.label}</span></div>
          </div>
          <div className="hero-art" role="img" aria-label="A self-made ember and flame illustration for Savanna Grill">
            <span className="art-orbit art-orbit-one" aria-hidden="true" />
            <span className="art-orbit art-orbit-two" aria-hidden="true" />
            <div className="plate-art" aria-hidden="true">
              <span className="plate-ring" />
              <span className="plate-heat plate-heat-one" />
              <span className="plate-heat plate-heat-two" />
              <span className="plate-heat plate-heat-three" />
              <span className="plate-green plate-green-one" />
              <span className="plate-green plate-green-two" />
              <Flame className="plate-flame" strokeWidth={1.2} />
            </div>
            <div className="art-label"><span>ON THE FIRE</span><strong>All together<br />tastes better.</strong></div>
            <span className="art-side-note">SG / 01 · TARKWA</span>
          </div>
          <div className="hero-bottom-line"><span>01 / 04</span><span>Made for evenings that stay a little longer</span><a href="#menu" aria-label="Scroll to menu"><ArrowDownRight size={20} aria-hidden="true" /></a></div>
        </section>

        <div className="ticker" aria-label="Savanna Grill values">
          <div><span>EMBER & SPICE</span><i aria-hidden="true">✳</i><span>GHANAIAN FAVOURITES</span><i aria-hidden="true">✳</i><span>GOOD COMPANY</span><i aria-hidden="true">✳</i><span>TARKWA, GHANA</span><i aria-hidden="true">✳</i><span>EMBER & SPICE</span></div>
        </div>

        <Menu />

        <section className="story-section section-pad" id="story" aria-labelledby="story-title">
          <Reveal className="story-stamp"><span>FIRE</span><Flame size={26} strokeWidth={1.4} aria-hidden="true" /><span>FRIENDS</span></Reveal>
          <Reveal className="story-copy">
            <p className="eyebrow">The long-table feeling</p>
            <h2 id="story-title">Pull up<br /><em>a chair.</em></h2>
            <p>{homeContent.storyCopy}</p>
            <p className="story-aside">A little smoke in the air. Your people close by. That’s the whole idea.</p>
          </Reveal>
          <div className="story-art" role="img" aria-label="Illustrated table setting with warm ember, cream and savanna gold shapes">
            <div className="story-sun" aria-hidden="true" />
            <div className="story-plate" aria-hidden="true"><span /><i /><b /></div>
            <div className="story-side-label"><Utensils size={16} aria-hidden="true" /><span>Pass a plate</span></div>
            <span className="story-art-index">A TABLE FOR EVERYONE / 02</span>
          </div>
        </section>

        <section className="gallery-section section-pad" id="gallery" aria-labelledby="gallery-title">
          <div className="section-heading gallery-heading">
            <div><p className="eyebrow">The moments between bites</p><h2 id="gallery-title">A seat at<br /><span>the table.</span></h2></div>
            <p className="section-intro">Good things happen around the grill. This concept gallery marks the places where real Savanna moments will live.</p>
          </div>
          <div className="gallery-grid">
            <figure className="gallery-slot gallery-slot-main" role="img" aria-label="Photo placeholder for a shared charcoal grill spread">
              <div className="slot-illustration slot-illustration-main" aria-hidden="true"><span className="slot-plate" /><span className="slot-steam" /></div>
              <figcaption><span>PHOTO SLOT 01</span><strong>The shared spread</strong></figcaption>
            </figure>
            <figure className="gallery-slot gallery-slot-side" role="img" aria-label="Photo placeholder for the grill and glowing coals">
              <div className="slot-illustration slot-illustration-fire" aria-hidden="true"><span /><i /><b /></div>
              <figcaption><span>PHOTO SLOT 02</span><strong>From the fire</strong></figcaption>
            </figure>
            <figure className="gallery-slot gallery-slot-small" role="img" aria-label="Photo placeholder for a table gathering in Tarkwa">
              <div className="slot-illustration slot-illustration-table" aria-hidden="true"><span /><i /><b /><em /></div>
              <figcaption><span>PHOTO SLOT 03</span><strong>Long-table evenings</strong></figcaption>
            </figure>
          </div>
        </section>

        <section className="visit-section section-pad" id="visit" aria-labelledby="visit-title">
          <div className="visit-card">
            <div className="visit-copy">
              <p className="eyebrow">Come hungry</p>
              <h2 id="visit-title">Find us<br /><em>in Tarkwa.</em></h2>
              <p>Our map pin, phone number, and opening hours are placeholders for this concept. The location link opens a Google Maps search without an API key.</p>
              <div className="visit-detail"><MapPin size={18} aria-hidden="true" /><span>{siteConfig.address}</span></div>
              <div className="visit-detail"><OpenStatus /></div>
              <div className="visit-actions">
                <a className="button button-light" href={mapHref} target="_blank" rel="noreferrer">Open Google Maps <ArrowUpRight size={17} aria-hidden="true" /></a>
                <a className="visit-phone" href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
              </div>
            </div>
            <div className="map-art" role="img" aria-label="Illustrated map pattern marking Tarkwa, Ghana">
              <div className="map-lines" aria-hidden="true"><span /><span /><span /><span /><span /></div>
              <div className="map-pin"><MapPin size={23} fill="currentColor" aria-hidden="true" /><span>TARKWA</span></div>
              <span className="map-coordinates">TARKWA<br />WESTERN REGION</span>
              <span className="map-caption">WESTERN REGION / GH</span>
            </div>
          </div>
        </section>

        <section className="last-call section-pad" aria-labelledby="last-call-title">
          <div className="last-call-stamp"><Image src="/brand/icon.svg" alt="" width={42} height={42} /></div>
          <p className="eyebrow">The grill is calling</p>
          <h2 id="last-call-title">Save room<br /><em>for one more.</em></h2>
          <a href="#menu" className="button button-primary">Build your order <ArrowDownRight size={18} aria-hidden="true" /></a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
