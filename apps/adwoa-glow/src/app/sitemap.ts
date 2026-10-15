import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { products } from "@/content/products";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.siteUrl, changeFrequency: "monthly", priority: 1 },
    ...products.map((product) => ({ url: siteConfig.siteUrl + "/products/" + product.slug, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
