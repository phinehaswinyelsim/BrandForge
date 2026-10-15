export type WorkItem = {
  slug: string;
  name: string;
  sector: string;
  short: string;
  problem: string;
  brief: string;
  approach: string[];
  outcome: string;
  services: string[];
  desktopImage: string;
  mobileImage: string;
  campaignImage: string;
  demoUrl: string;
};

export const workItems: WorkItem[] = [
  {
    slug: "savanna-grill",
    name: "Savanna Grill",
    sector: "Food & hospitality · Tarkwa",
    short: "A lively home for a neighbourhood grill and the people who gather around it.",
    problem: "A new restaurant needs more than a menu online. It needs to make the feeling of a shared table easy to imagine, while helping guests find the food, place and next step without a fuss.",
    brief: "Create a warm, confident restaurant concept for Tarkwa with a distinctive identity and a mobile-first ordering experience.",
    approach: ["Built an ember-and-charcoal identity around the line ‘Fire. Flavour. Friends.’", "Made the menu and GH₵ pricing easy to scan, with a client-side basket that prepares an order for WhatsApp.", "Used a self-made plate illustration and editorial typography to create atmosphere without stock photography."],
    outcome: "The finished concept brings the menu, location, opening information and ordering path into one expressive, phone-friendly experience.",
    services: ["Brand identity", "Website", "Menu and campaign graphics"],
    desktopImage: "/work/savanna-grill-desktop.png",
    mobileImage: "/work/savanna-grill-mobile.png",
    campaignImage: "/work/savanna-grill-campaign.png",
    demoUrl: process.env.NEXT_PUBLIC_SAVANNA_DEMO_URL ?? "",
  },
  {
    slug: "adwoa-glow",
    name: "Adwoa Glow",
    sector: "Beauty & care · Ghana",
    short: "A softer digital ritual for a botanical skincare brand rooted in Ghanaian ingredients.",
    problem: "A thoughtful skincare range needs room to explain its ingredients and rituals. Product information should feel calm and considered, without making unsupported promises about what a formula can do.",
    brief: "Develop a refined skincare concept with a clear visual identity, an eight-product collection and an inviting path to ask or order.",
    approach: ["Paired a cocoa, blush and ivory palette with expressive serif typography.", "Gave each product a considered detail page for its ingredients, size and everyday ritual.", "Used original CSS and SVG product art, with concept-only formula details and no clinical claims."],
    outcome: "The experience gives the collection a cohesive visual language and makes its product stories easier to explore on a phone or desktop.",
    services: ["Brand identity", "E-commerce concept", "Product and campaign graphics"],
    desktopImage: "/work/adwoa-glow-desktop.png",
    mobileImage: "/work/adwoa-glow-mobile.png",
    campaignImage: "/work/adwoa-glow-campaign.png",
    demoUrl: process.env.NEXT_PUBLIC_ADWOA_DEMO_URL ?? "",
  },
  {
    slug: "nkwa-logistics",
    name: "Nkwa Logistics",
    sector: "Delivery & transport · Ghana",
    short: "A clear, human digital front door for a delivery service moving across Ghana.",
    problem: "People sending a parcel want to understand the service, get a useful starting estimate and know where to check a delivery. Those steps should feel straightforward from a small screen.",
    brief: "Build a modern logistics concept that makes services, coverage, sample quotes and parcel tracking clear from the first visit.",
    approach: ["Used a confident green-and-amber identity and a custom schematic route illustration.", "Designed a quote calculator and clearly marked sample tracking journey to make the service tangible.", "Kept route distances, rates and tracking status visibly identified as demo data."],
    outcome: "The concept connects a quote path, service overview and tracking preview in one direct, accessible experience.",
    services: ["Brand identity", "Website", "Service and campaign graphics"],
    desktopImage: "/work/nkwa-logistics-desktop.png",
    mobileImage: "/work/nkwa-logistics-mobile.png",
    campaignImage: "/work/nkwa-logistics-campaign.png",
    demoUrl: process.env.NEXT_PUBLIC_NKWA_DEMO_URL ?? "",
  },
];

export function getWorkItem(slug: string) {
  return workItems.find((item) => item.slug === slug);
}
