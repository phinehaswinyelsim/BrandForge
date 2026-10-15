import type { Product } from "@/content/products";

export function ProductArt({ product, className = "" }: { product: Product; className?: string }) {
  return (
    <div className={"product-art " + className + " product-art--" + product.color} aria-hidden="true">
      <span className="art-sun" />
      <span className="art-leaf art-leaf--one" />
      <span className="art-leaf art-leaf--two" />
      <svg viewBox="0 0 360 390" role="presentation">
        <ellipse cx="180" cy="342" rx="94" ry="15" className="pack-shadow" />
        <g className={"pack-pack pack--" + product.visual}>
          {product.visual === "jar" && <><rect x="113" y="145" width="134" height="28" rx="8" className="pack-cap" /><rect x="106" y="166" width="148" height="148" rx="25" className="pack-body" /></>}
          {product.visual === "dropper" && <><rect x="152" y="90" width="56" height="25" rx="7" className="pack-cap" /><rect x="168" y="59" width="24" height="45" rx="12" className="pack-top" /><rect x="121" y="111" width="118" height="204" rx="33" className="pack-body" /></>}
          {product.visual === "bottle" && <><path d="M154 91h52v27l20 20v165c0 13-10 23-23 23h-46c-13 0-23-10-23-23V138l20-20V91Z" className="pack-body" /><rect x="156" y="68" width="48" height="30" rx="7" className="pack-cap" /></>}
          {product.visual === "mist" && <><path d="M146 102h68v28l17 19v155c0 15-11 26-26 26h-50c-15 0-26-11-26-26V149l17-19v-28Z" className="pack-body" /><path d="M158 78h38v26h-38zM196 82h42v13h-42z" className="pack-cap" /></>}
          {product.visual === "bar" && <><rect x="119" y="123" width="122" height="190" rx="28" className="pack-body" /><path d="M120 161c37-23 80 14 121-13v42c-42 28-82-12-121 13v-42Z" className="pack-band" /></>}
          <rect x="128" y="211" width="104" height="73" rx="5" className="pack-label" />
          <text x="180" y="239" textAnchor="middle" className="pack-wordmark">ADWOA</text>
          <text x="180" y="256" textAnchor="middle" className="pack-glow">G L O W</text>
          <text x="180" y="273" textAnchor="middle" className="pack-caption">BOTANICAL CARE</text>
        </g>
      </svg>
    </div>
  );
}
