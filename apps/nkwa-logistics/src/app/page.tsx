import Link from "next/link";
import { homeContent } from "@/content/home";
import { siteConfig } from "@/config/site";
import { phoneHref, whatsappHref } from "@/lib/whatsapp";
import { QuoteCalculator } from "@/components/QuoteCalculator";
import { RouteNetwork } from "@/components/RouteNetwork";
import { TrackingLookup } from "@/components/TrackingLookup";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const organization = {
  "@context": "https://schema.org", "@type": "Organization", name: siteConfig.name,
  url: siteConfig.siteUrl, logo: siteConfig.siteUrl + "/brand/logo-primary.svg", description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />
      <SiteHeader />
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy"><p className="eyebrow"><i className="eyebrow-dot" />{homeContent.eyebrow}</p><h1 id="hero-title">Move what <em>matters.</em></h1><p className="hero-description">{homeContent.description}</p><div className="hero-actions"><Link className="button button-amber" href="#quote">Plan a delivery <span aria-hidden="true">↗︎</span></Link><Link className="text-link text-link-light" href="/tracking">Track a parcel <span aria-hidden="true">→︎</span></Link></div><div className="hero-small"><span>BUILT AROUND THE NEXT STEP</span><span className="hero-small-mark">NK / 01</span></div></div>
          <div className="hero-map-wrap"><div className="hero-map-caption"><span>OUR NETWORK</span><span>04 TOWNS · SCHEMATIC</span></div><RouteNetwork /><div className="hero-map-foot"><span>Western Region to the rest of the route.</span><span>Not to scale</span></div></div>
          <div className="hero-bottom"><span>Movement with purpose</span><span className="hero-bottom-line" /><span>Tarkwa / Ghana</span></div>
        </section>

        <section className="service-section section-pad" id="services" aria-labelledby="services-title">
          <div className="section-heading"><div><p className="eyebrow">What needs to move?</p><h2 id="services-title">The right plan<br /><em>for the route.</em></h2></div><p className="section-intro">Three service ideas for parcels, planned intercity movement, and heavier loads that need a conversation first.</p></div>
          <div className="service-grid">{homeContent.services.map((service) => <article className="service-card" key={service.number}><Reveal className="service-card-content"><span className="service-number">{service.number}</span><span className="service-note">{service.note}</span><h3>{service.name}</h3><span className="service-time">{service.time}</span><p>{service.description}</p><Link href="#quote" className="text-link">Plan this move <span aria-hidden="true">↗︎</span></Link></Reveal></article>)}</div>
        </section>

        <section className="quote-section section-pad" id="quote" aria-labelledby="quote-title">
          <div className="quote-heading"><p className="eyebrow">Make a plan / 01</p><h2 id="quote-title">A clearer<br />first <em>estimate.</em></h2><p>Choose a route and parcel weight. The sample below shows how a quote experience could work.</p><span className="quote-disclaimer">Example values only · No booking is created</span></div>
          <QuoteCalculator />
        </section>

        <section className="tracking-section section-pad" id="tracking" aria-labelledby="tracking-title">
          <div className="tracking-intro"><p className="eyebrow">Know where it is / 02</p><h2 id="tracking-title">The next step,<br /><em>in view.</em></h2><p>Try the mock reference NK-1042 to see the sample timeline. No live tracking service is connected.</p><Link className="text-link" href="/tracking">Open the tracking page <span aria-hidden="true">↗︎</span></Link></div>
          <TrackingLookup />
        </section>

        <section className="coverage-section section-pad" id="coverage" aria-labelledby="coverage-title">
          <div className="coverage-heading"><p className="eyebrow">Four towns / One connected route</p><h2 id="coverage-title">Closer to the<br /><em>places you go.</em></h2><p>Our concept network starts in Tarkwa and links four key towns in Ghana.</p><p className="coverage-note">Illustrative service area. Routes and availability require confirmation.</p></div>
          <div className="coverage-list">{homeContent.coverage.map((town, index) => <article className="coverage-row" key={town.code}><span className="coverage-code">0{index + 1} / {town.code}</span><div><h3>{town.name}</h3><span>{town.region}</span></div><span className="coverage-dot" /></article>)}</div>
        </section>

        <section className="story-section section-pad" aria-labelledby="story-title">
          <div className="story-art" aria-hidden="true"><span className="story-grid"/><span className="story-ring story-ring--one"/><span className="story-ring story-ring--two"/><span className="story-spark">N</span><span className="story-art-label">LIFE / IN MOTION</span><span className="story-coordinate">05°18′N<br />01°59′W</span></div>
          <div className="story-copy"><p className="eyebrow">A name with meaning</p><h2 id="story-title">A route is more<br />than a line.</h2><p>{homeContent.story}</p><p className="story-footnote">A fictional Brand Forge portfolio concept. No real delivery service is represented here.</p></div>
        </section>

        <section className="faq-section section-pad" id="faq" aria-labelledby="faq-title">
          <div className="faq-heading"><p className="eyebrow">The important details</p><h2 id="faq-title">Good to<br /><em>know.</em></h2><p>Answers for this concept experience.</p><Link className="button button-outline" href="#contact">Talk to the team <span aria-hidden="true">↗︎</span></Link></div>
          <div className="faq-list">{homeContent.faqs.map((faq, index) => <details className="faq-item" key={faq.question}><summary><span className="faq-number">0{index + 1}</span><span>{faq.question}</span><span className="faq-toggle" aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div>
        </section>

        <section className="contact-section" id="contact"><div><p className="eyebrow">Ready for a conversation?</p><h2>Let’s get the<br /><em>next move right.</em></h2><p>Share the route, parcel, and timing. A real team can confirm what is possible.</p></div><div className="contact-actions"><a className="button button-amber" href={whatsappHref("Hello Nkwa Logistics. I would like to discuss a delivery.")}>WhatsApp the team <span aria-hidden="true">↗︎</span></a><a className="button button-outline-light" href={phoneHref()}>Call {siteConfig.phone} <span aria-hidden="true">→︎</span></a><a className="contact-email" href={"mailto:" + siteConfig.email}>{siteConfig.email}</a><span className="contact-address">{siteConfig.address} · {siteConfig.hours}</span></div><span className="contact-mark" aria-hidden="true">NK</span></section>
      </main>
      <SiteFooter />
    </>
  );
}
