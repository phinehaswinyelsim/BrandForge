import Image from "next/image";
import Link from "next/link";
import type { WorkItem } from "@/content/work";
import { Reveal } from "@/components/Reveal";

export function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  return (
    <Reveal className={`work-card ${index === 0 ? "work-card-featured" : ""}`} delay={index * 0.07}>
      <Link className="work-card-link" href={`/work/${item.slug}`} aria-label={`View ${item.name} concept case study`}>
        <div className="work-card-image">
          <Image src={item.desktopImage} alt={`${item.name} website concept on desktop`} fill sizes="(max-width: 760px) 100vw, 60vw" />
          <span className="concept-chip">Concept project</span>
          <span className="work-card-arrow" aria-hidden="true">↗</span>
        </div>
        <div className="work-card-copy">
          <div><p className="eyebrow">{item.sector}</p><h3>{item.name}</h3></div>
          <p>{item.short}</p>
        </div>
      </Link>
    </Reveal>
  );
}
