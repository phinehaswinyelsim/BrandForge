import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.siteUrl}/brand`, changeFrequency: "yearly", priority: 0.5 },
  ];
}
