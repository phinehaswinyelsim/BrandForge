import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getWorkItem, workItems } from "@/content/work";
import { siteConfig } from "@/config/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return workItems.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getWorkItem(slug);
  if (!item) return { title: "Project not found" };
  const title = `${item.name} · Concept case study`;
  return {
    title,
    description: item.short,
    alternates: { canonical: `/work/${item.slug}` },
    openGraph: { type: "article", title: `${title} | Brand Forge`, description: item.short, url: `/work/${item.slug}`, images: [{ url: item.desktopImage, width: 1440, height: 1000, alt: `${item.name} website concept` }] },
    twitter: { card: "summary_large_image", title, description: item.short, images: [item.desktopImage] },
  };
}

export default async function WorkPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getWorkItem(slug);
  if (!item) notFound();

  const structuredData = {
    "@context": "https://schema.org", "@type": "CreativeWork", name: `${item.name} concept`, description: item.short,
    creator: { "@type": "Organization", name: siteConfig.name, url: siteConfig.siteUrl }, genre: "Concept brand identity and website",
    image: new URL(item.desktopImage, siteConfig.siteUrl).toString(),
  };

  return (
    <>
      <SiteHeader />
      <main id="main" className="case-page">
        <section className="case-hero wrap" aria-labelledby="case-title">
          <Link className="back-link" href="/#work"><ArrowLeft size={16} aria-hidden="true" /> Back to selected work</Link>
          <p className="eyebrow"><span className="eyebrow-dot" />{item.sector} <span className="case-separator">/</span> Concept project</p>
          <h1 id="case-title">{item.name}<span className="case-title-period">.</span></h1>
          <p className="case-lede">{item.short}</p>
          <div className="case-meta"><div><span>Project</span><b>{item.name}</b></div><div><span>Studio</span><b>Brand Forge</b></div><div><span>Scope</span><b>{item.services.join(" · ")}</b></div></div>
          <div className="case-main-image"><Image src={item.desktopImage} alt={`${item.name} website concept displayed on a desktop screen`} width={1440} height={1000} priority sizes="(max-width: 900px) 100vw, 1200px" /></div>
        </section>

        <section className="case-story section" aria-label="Project story">
          <div className="wrap case-story-grid">
            <p className="eyebrow">The brief</p>
            <div className="case-copy-block"><h2>Start with the <span>real need.</span></h2><p className="case-subhead">The problem</p><p>{item.problem}</p><p className="case-subhead">The brief</p><p>{item.brief}</p></div>
          </div>
        </section>

        <section className="case-approach section" aria-label="Design approach">
          <div className="wrap case-approach-grid"><div><p className="eyebrow">The thinking</p><h2>Make every detail <span>belong.</span></h2></div><div className="approach-list">{item.approach.map((step, index) => <Reveal key={step} className="approach-item" delay={index * .06}><span>0{index + 1}</span><p>{step}</p></Reveal>)}</div></div>
        </section>

        <section className="case-gallery section" id="deliverables" aria-labelledby="deliverables-title">
          <div className="wrap"><div className="section-heading"><div><p className="eyebrow">Made for the screen</p><h2 id="deliverables-title">A closer <span>look.</span></h2></div><p>Website concept captured from the production build, with original campaign artwork alongside it.</p></div>
            <div className="deliverable-grid">
              <figure className="deliverable-desktop"><Image src={item.desktopImage} alt={`${item.name} homepage on a desktop browser`} width={1440} height={1000} sizes="(max-width: 760px) 100vw, 65vw" /><figcaption>Homepage · Desktop view</figcaption></figure>
              <figure className="deliverable-mobile"><Image src={item.mobileImage} alt={`${item.name} homepage on a mobile browser`} width={390} height={844} sizes="(max-width: 760px) 48vw, 25vw" /><figcaption>Homepage · Mobile view</figcaption></figure>
              <figure className="deliverable-campaign"><Image src={item.campaignImage} alt={`${item.name} original concept campaign artwork`} width={1080} height={1080} sizes="(max-width: 760px) 85vw, 40vw" /><figcaption>Original campaign artwork · Social</figcaption></figure>
            </div>
          </div>
        </section>

        <section className="case-outcome section" aria-label="Project outcome">
          <div className="wrap case-outcome-inner"><p className="eyebrow">What it brings together</p><div><h2>One clear <span>experience.</span></h2><p>{item.outcome}</p><div className="case-services">{item.services.map((service) => <span key={service}>{service}</span>)}</div>
            {item.demoUrl ? <a className="button button-bright" href={item.demoUrl} target="_blank" rel="noreferrer">Visit live concept <ArrowUpRight size={16} aria-hidden="true" /></a> : <div className="demo-pending"><a href="#deliverables">View the concept preview <ArrowUpRight size={16} aria-hidden="true" /></a><span>Live demo link will appear here when a project URL is added.</span></div>}
          </div></div>
          <p className="case-disclaimer">Concept project by Brand Forge. This is fictional work created for portfolio demonstration and does not represent a real business, client commission or measured result.</p>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <SiteFooter />
    </>
  );
}
