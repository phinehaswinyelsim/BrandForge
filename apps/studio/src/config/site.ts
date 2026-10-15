export const siteConfig = {
  name: "Brand Forge",
  description: "An independent creative studio in Ghana building clear brand identities, useful websites and launch-ready graphics.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@example.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+233 XX XXX XXXX",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "233XXXXXXXXX",
  address: "Ghana",
  hours: "By appointment",
  socials: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  },
} as const;
