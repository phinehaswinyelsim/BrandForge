import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, findProduct, currency } from "@/content/products";
import { whatsappHref } from "@/lib/whatsapp";
import { ProductArt } from "@/components/ProductArt";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: "/products/" + product.slug },
    openGraph: { title: product.name + " | Adwoa Glow", description: product.description, images: ["/og-image.png"] },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) notFound();
  const message = "Hello Adwoa Glow. I would like to ask about the " + product.name + " concept (" + product.size + ").";
  return (
    <>
      <SiteHeader />
      <main id="main" className="product-detail">
        <div className="detail-breadcrumb"><Link href="/#collection">The collection</Link><span aria-hidden="true">/</span><span>{product.name}</span></div>
        <div className="detail-layout">
          <div className="detail-art-wrap"><ProductArt product={product} className="detail-art" /></div>
          <div className="detail-copy">
            <p className="eyebrow">{product.category} ritual · {product.size}</p>
            <h1>{product.name}</h1>
            <p className="detail-description">{product.description}</p>
            <p className="detail-price">{currency(product.price)} <span>illustrative concept price</span></p>
            <a className="button button-primary" href={whatsappHref(message)}>Ask about this concept <span aria-hidden="true">↗︎</span></a>
            <p className="detail-placeholder">This is a fictional concept product and is not available for sale. The WhatsApp recipient is a placeholder until replaced.</p>
            <div className="detail-facts">
              <div><h2>Ingredient inspiration</h2><ul>{product.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}</ul></div>
              <div><h2>A moment for you</h2><p>{product.ritual}</p></div>
            </div>
            <p className="safety-note">Illustrative concept only. No formula or product safety testing has been completed.</p>
          </div>
        </div>
        <div className="detail-more"><p className="eyebrow">Keep exploring</p><h2>Care, your way.</h2><Link href="/#collection" className="text-link">Back to the collection <span aria-hidden="true">↗︎</span></Link></div>
      </main>
      <SiteFooter />
    </>
  );
}
