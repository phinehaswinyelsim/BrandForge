import Link from "next/link";
import type { Product } from "@/content/products";
import { currency } from "@/content/products";
import { ProductArt } from "@/components/ProductArt";

export function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <article className="product-card">
      <Link href={"/products/" + product.slug} className="product-card-art" aria-label={"View " + product.name}>
        <ProductArt product={product} />
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <span className="product-index">0{index + 1}</span>
      </Link>
      <div className="product-card-meta"><span>{product.category} · {product.size}</span><span>{currency(product.price)}</span></div>
      <h3><Link href={"/products/" + product.slug}>{product.name}</Link></h3>
      <p>{product.description}</p>
      <Link className="product-link" href={"/products/" + product.slug}>Discover the ritual <span aria-hidden="true">↗︎</span></Link>
    </article>
  );
}
