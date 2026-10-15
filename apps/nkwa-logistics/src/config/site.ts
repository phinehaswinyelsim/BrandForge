export const siteConfig = {
  name: "Nkwa Logistics",
  description: "A Ghanaian logistics concept for clear, dependable movement between Tarkwa, Takoradi, Accra, and Kumasi.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@example.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+233 XX XXX XXXX",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "233XXXXXXXXX",
  address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS ?? "Tarkwa, Western Region, Ghana",
  hours: process.env.NEXT_PUBLIC_BUSINESS_HOURS ?? "Monday to Saturday, 7:00 AM to 7:00 PM",
  socials: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  },
} as const;
