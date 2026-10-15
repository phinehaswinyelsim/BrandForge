export const siteConfig = {
  name: "Adwoa Glow",
  description: "A Ghanaian skincare concept inspired by botanicals, everyday care, and the rituals we return to.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@example.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+233 XX XXX XXXX",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "233XXXXXXXXX",
  address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS ?? "Accra, Ghana",
  hours: process.env.NEXT_PUBLIC_BUSINESS_HOURS ?? "Monday to Friday, 9:00 AM to 5:00 PM",
  socials: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
  },
} as const;
