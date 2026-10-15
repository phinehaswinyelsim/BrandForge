export const siteConfig = {
  name: "Savanna Grill",
  description: "A warm, casual grill concept in Tarkwa, Ghana. Fire. Flavour. Friends.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@example.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+233 XX XXX XXXX",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "233XXXXXXXXX",
  address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS ?? "Tarkwa, Western Region, Ghana",
  mapQuery: process.env.NEXT_PUBLIC_MAP_QUERY ?? "Tarkwa, Western Region, Ghana",
  hours: {
    timezone: "Africa/Accra",
    open: process.env.NEXT_PUBLIC_OPEN_TIME ?? "11:00",
    close: process.env.NEXT_PUBLIC_CLOSE_TIME ?? "22:00",
    label: process.env.NEXT_PUBLIC_BUSINESS_HOURS ?? "Every day, 11:00 AM to 10:00 PM",
  },
  socials: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
  },
} as const;
