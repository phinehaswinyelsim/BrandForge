import Link from "next/link";
import { homeContent } from "@/content/home";
import { products } from "@/content/products";
import { siteConfig } from "@/config/site";
import { whatsappHref } from "@/lib/whatsapp";
import { ProductArt } from "@/components/ProductArt";
import { ProductCard } from "@/components/ProductCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  logo: siteConfig.siteUrl + "/brand/logo-primary.svg",
  description: siteConfig.description,
};

export default function HomePage() {
  const featured = products[0];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />
      <SiteHeader />
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" />{homeContent.eyebrow}</p>
            <h1 id="hero-title">Come back to your own <em>glow.</em></h1>
            <p className="hero-description">{homeContent.description}</p>
            <div className="hero-actions"><a className="button button-primary" href="#collection">Explore the collection <span aria-hidden="true">↗︎</span></a><a className="text-link" href="#story">The story <span aria-hidden="true">↓︎</span></a></div>
            <div className="hero-note"><span>01</span><p>Care is not a performance.<br />It is a moment you make your own.</p></div>
          </div>
          <div className="hero-visual" aria-label="Illustrative Adwoa Glow body balm packaging">
            <div className="hero-visual-copy"><span>THE DAILY RITUAL</span><strong>Softness<br />in every<br />slow moment.</strong></div>
            <ProductArt product={featured} className="hero-product" />
            <span className="hero-orbit hero-orbit--one" /><span className="hero-orbit hero-orbit--two" />
            <span className="hero-visual-index">A / G <i>01</i></span>
          </div>
          <div className="hero-bottom"><span>Rooted in Ghanaian ingredient inspiration</span><span className="hero-bottom-rule" /><span>Skincare concept / 01</span></div>
        </section>

        <section className="collection-section section-pad" id="collection" aria-labelledby="collection-title">
          <div className="section-heading">
            <div><p className="eyebrow">The collection / 01—08</p><h2 id="collection-title">Meet your<br /><em>new rituals.</em></h2></div>
            <p className="section-intro">A considered collection for face, body, and hair. Each product is a concept; the formulas and prices are illustrative.</p>
          </div>
          <div className="product-grid">{products.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}</div>
          <p className="collection-disclaimer">Fictional concept range by Brand Forge. Products are not for sale and have not been formulated or tested.</p>
        </section>

        <section className="ingredient-section section-pad" id="ingredients" aria-labelledby="ingredient-title">
          <div className="ingredient-intro"><p className="eyebrow">A little closer to home</p><h2 id="ingredient-title">Ingredients<br />with a <em>story.</em></h2><p>Inspired by botanicals and familiar textures, the Adwoa Glow range is designed around care that feels grounded, gentle, and yours.</p><Link href="/brand" className="text-link">See the brand notes <span aria-hidden="true">↗︎</span></Link></div>
          <div className="ingredient-list">{homeContent.ingredients.map((ingredient, index) => <article className="ingredient-row" key={ingredient.name}><span className="ingredient-number">0{index + 1}</span><div><h3>{ingredient.name}</h3><span>{ingredient.place}</span><p>{ingredient.note}</p></div><span className="ingredient-symbol" aria-hidden="true">✳︎</span></article>)}</div>
          <p className="ingredient-disclaimer">Ingredient names describe concept inspiration only. No supplier, sourcing, formula, or efficacy claims are made.</p>
        </section>

        <section className="story-section section-pad" id="story" aria-labelledby="story-title">
          <div className="story-art" aria-hidden="true"><div className="story-oval story-oval--one" /><div className="story-oval story-oval--two" /><span className="story-seed">a<br /><i>g</i></span><span className="story-stamp">GHANA<br />ROOTED</span><span className="story-label">CARE, WITH INTENTION</span></div>
          <div className="story-copy"><p className="eyebrow">Our story / A softer point of view</p><h2 id="story-title">{homeContent.storyTitle}</h2><p>{homeContent.story}</p><p className="story-small">A fictional brand world built by Brand Forge to show how a skincare idea can become a thoughtful digital experience.</p><a className="text-link" href="#newsletter">Leave us a note <span aria-hidden="true">↗︎</span></a></div>
        </section>

        <section className="newsletter-section section-pad" id="newsletter" aria-labelledby="newsletter-title">
          <div><p className="eyebrow">A note from Adwoa</p><h2 id="newsletter-title">A little glow<br />in your <em>inbox.</em></h2><p>{homeContent.newsletterNote}</p></div>
          <NewsletterForm />
        </section>

        <section className="faq-section section-pad" id="faq" aria-labelledby="faq-title">
          <div className="faq-heading"><p className="eyebrow">Good to know</p><h2 id="faq-title">A few things<br />you may <em>wonder.</em></h2><p>Clear answers about this concept range.</p><a className="button button-outline" href={whatsappHref("Hello Adwoa Glow. I have a question about the concept range.")}>Ask a question <span aria-hidden="true">↗︎</span></a></div>
          <div className="faq-list">{homeContent.faqs.map((faq, index) => <details key={faq.question} className="faq-item"><summary><span className="faq-number">0{index + 1}</span><span>{faq.question}</span><span className="faq-toggle" aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div>
        </section>

        <section className="closing-section"><p className="eyebrow">A soft place to begin</p><h2>Your care.<br /><em>Your own rhythm.</em></h2><a className="button button-dark" href={whatsappHref("Hello Adwoa Glow. I would like to ask about your concept range.")}>Start a WhatsApp enquiry <span aria-hidden="true">↗︎</span></a><span className="closing-seed" aria-hidden="true">✳︎</span></section>
      </main>
      <SiteFooter />
    </>
  );
}
