import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TrackingLookup } from "@/components/TrackingLookup";

export const metadata: Metadata = {
  title: "Track a parcel",
  description: "A sample parcel-tracking experience for the Nkwa Logistics concept.",
  alternates: { canonical: "/tracking" },
  openGraph: { title: "Track a parcel | Nkwa Logistics", description: "See the concept tracking timeline for sample reference NK-1042.", images: ["/og-image.png"] },
};

export default function TrackingPage() {
  return <><SiteHeader /><main id="main" className="tracking-page"><div className="tracking-page-heading"><p className="eyebrow">Parcel visibility / Demo only</p><h1>Know the<br /><em>next step.</em></h1><p>Enter the sample tracking code to preview a parcel timeline. This concept page is not connected to live operations.</p><Link href="/" className="text-link">Back to the home page <span aria-hidden="true">↗︎</span></Link></div><TrackingLookup /></main><SiteFooter /></>;
}
