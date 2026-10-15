import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { workItems } from "@/content/work";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.siteUrl, changeFrequency: "monthly", priority: 1 },
    ...workItems.map(({ slug }) => ({ url: `${siteConfig.siteUrl}/work/${slug}`, changeFrequency: "monthly" as const, priority: .7 })),
  ];
}
