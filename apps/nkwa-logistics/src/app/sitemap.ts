import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: siteConfig.siteUrl + "/tracking", changeFrequency: "monthly", priority: 0.6 },
  ];
}
