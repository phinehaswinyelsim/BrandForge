import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WorkCard } from "@/components/WorkCard";
import { homeContent } from "@/content/home";
import { workItems } from "@/content/work";
import { siteConfig } from "@/config/site";

const hasWhatsApp = /^\d{10,15}$/.test(siteConfig.whatsappNumber);

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" />{homeContent.hero.eyebrow}</p>
            <h1 id="hero-title">{homeContent.hero.title} <span>{homeContent.hero.emphasis}</span></h1>
            <p className="hero-description">{homeContent.hero.description}</p>
            <div className="hero-actions">
              <a className="button button-bright" href="#work">{homeContent.hero.primaryAction} <ArrowDownRight size={18} aria-hidden="true" /></a>
              <a className="text-link" href="#contact">{homeContent.hero.secondaryAction} <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <p className="hero-note"><span /> {homeContent.hero.note}</p>
          </div>
          <div className="hero-art" aria-label="Brand Forge monogram and studio promise">
            <div className="hero-art-meta"><span>{homeContent.hero.artMeta[0]}</span><span>{homeContent.hero.artMeta[1]}</span></div>
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <Image className="hero-mark" src="/brand/brand-forge-mark.svg" alt="Brand Forge B and F monogram with a spark" width={260} height={260} priority />
            <span className="hero-art-caption">{homeContent.hero.artCaption.map((line) => <span key={line}>{line}</span>)}</span>
            <span className="hero-coordinate">{homeContent.hero.coordinates}</span>
          </div>
          <a className="scroll-cue" href="#work"><span>{homeContent.workSection.scrollLabel}</span><ArrowDownRight size={17} aria-hidden="true" /></a>
        </section>

        <section className="work-section section" id="work" aria-labelledby="work-title">
          <div className="wrap">
            <div className="section-heading section-heading-wide">
              <div><p className="eyebrow">{homeContent.workSection.eyebrow}</p><h2 id="work-title">{homeContent.workSection.title} <span>{homeContent.workSection.emphasis}</span></h2></div>
              <p>{homeContent.workSection.description}</p>
            </div>
            <div className="work-grid">
              {workItems.map((item, index) => <WorkCard key={item.slug} item={item} index={index} />)}
            </div>
            <p className="concept-disclosure">{homeContent.workSection.disclosure}</p>
          </div>
        </section>

        <section className="real-work-section section" aria-labelledby="real-work-title">
          <div className="wrap real-work-inner">
            <div><p className="eyebrow">{homeContent.realWorkSection.eyebrow}</p><h2 id="real-work-title">{homeContent.realWorkSection.title} <span>{homeContent.realWorkSection.emphasis}</span></h2><p className="section-lede">{homeContent.realWorkSection.description}</p></div>
            <div className="real-work-slots">
              {homeContent.realProjects.map((project) => (
                <div className="real-slot" key={project.label}>
                  <span>{project.label}</span><h3>{project.name}</h3><p>{project.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section section" id="services" aria-labelledby="services-title">
          <div className="wrap">
            <div className="section-heading section-heading-wide">
              <div><p className="eyebrow">{homeContent.servicesSection.eyebrow}</p><h2 id="services-title">{homeContent.servicesSection.title} <span>{homeContent.servicesSection.emphasis}</span></h2></div>
              <p>{homeContent.servicesSection.description}</p>
            </div>
            <div className="services-grid">
              {homeContent.services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span className="card-number">{service.number}</span><ArrowUpRight className="service-icon" size={20} aria-hidden="true" />
                  <h3>{service.title}</h3><p>{service.detail}</p>
                  <a href="#contact">{homeContent.servicesSection.action} <MoveUpRight size={14} aria-hidden="true" /></a>
                </article>
              ))}
            </div>
            <p className="quiet-note">{homeContent.servicesSection.note}</p>
          </div>
        </section>

        <section className="process-section section" aria-labelledby="process-title">
          <div className="wrap process-layout">
            <div className="process-intro"><p className="eyebrow">{homeContent.processSection.eyebrow}</p><h2 id="process-title">{homeContent.processSection.title}<br /><span>{homeContent.processSection.emphasis}</span></h2><p>{homeContent.processSection.description}</p></div>
            <div className="process-list">
              {homeContent.process.map((step) => <article className="process-step" key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.detail}</p></div><ArrowDownRight size={18} aria-hidden="true" /></article>)}
            </div>
          </div>
        </section>

        <section className="about-section section" id="studio" aria-labelledby="about-title">
          <div className="wrap about-grid">
            <div className="about-stamp"><Image src="/brand/brand-forge-mark.svg" alt="" width={96} height={96} /><span>{homeContent.about.stamp.map((line) => <span key={line}>{line}</span>)}</span></div>
            <div><p className="eyebrow">{homeContent.about.eyebrow}</p><h2 id="about-title">{homeContent.about.title} <span>{homeContent.about.emphasis}</span></h2><p className="about-copy">{homeContent.about.description}</p><a className="text-link" href="#contact">{homeContent.about.action} <ArrowUpRight size={16} aria-hidden="true" /></a></div>
          </div>
        </section>

        <section className="faq-section section" aria-labelledby="faq-title">
          <div className="wrap faq-layout">
            <div><p className="eyebrow">{homeContent.faqSection.eyebrow}</p><h2 id="faq-title">{homeContent.faqSection.title} <span>{homeContent.faqSection.emphasis}</span></h2></div>
            <div className="faq-list">{homeContent.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div>
          </div>
        </section>

        <section className="contact-section section" id="contact" aria-labelledby="contact-title">
          <div className="wrap contact-grid">
            <div className="contact-intro"><p className="eyebrow">{homeContent.contact.eyebrow}</p><h2 id="contact-title">{homeContent.contact.title} <span>{homeContent.contact.emphasis}</span></h2><p>{homeContent.contact.description}</p>
              <div className="contact-direct"><a href={`mailto:${siteConfig.email}`}>{homeContent.contact.emailAction} <ArrowUpRight size={16} aria-hidden="true" /></a>{hasWhatsApp ? <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noreferrer">{homeContent.contact.whatsappAction} <ArrowUpRight size={16} aria-hidden="true" /></a> : <span>{homeContent.contact.whatsappPlaceholder}</span>}</div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
