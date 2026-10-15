export const homeContent = {
  eyebrow: "Movement with purpose / Ghana",
  heading: "Move what matters.",
  description: "From a parcel close to home to a load crossing the country, the next move should feel clear from the start.",
  story: "Nkwa means life in Akan. That idea shapes a logistics concept built around the things that keep work, care, and everyday life moving.",
  services: [
    { number: "01", name: "Same-day", time: "Local movement", description: "For the parcel or document that needs to reach someone across town today.", note: "Illustrative service" },
    { number: "02", name: "Intercity", time: "Between key towns", description: "Planned parcel and package movement connecting Tarkwa, Takoradi, Accra, and Kumasi.", note: "Illustrative service" },
    { number: "03", name: "Freight", time: "Loads that need a plan", description: "A direct conversation about heavier goods, timing, handling, and a route that fits.", note: "Request a custom quote" },
  ],
  coverage: [
    { name: "Tarkwa", region: "Western Region", code: "TRK" },
    { name: "Takoradi", region: "Western Region", code: "TKD" },
    { name: "Accra", region: "Greater Accra", code: "ACC" },
    { name: "Kumasi", region: "Ashanti Region", code: "KMS" },
  ],
  faqs: [
    { question: "How accurate is the quote calculator?", answer: "The calculator uses sample route distances and placeholder pricing tiers to demonstrate the interaction. It is not a live quote. A real operator must confirm routes, fees, and service availability." },
    { question: "Can I track a real delivery here?", answer: "No. NK-1042 is mock tracking data for the concept demo. There is no dispatch system or live parcel data connected to this site." },
    { question: "Which towns are shown in the coverage map?", answer: "The concept illustrates Tarkwa, Takoradi, Accra, and Kumasi. A real service area and schedule must be confirmed before launch." },
    { question: "How do I request a freight quote?", answer: "Use the WhatsApp enquiry button to open a prefilled message. The recipient is intentionally blank while the example phone number remains a placeholder." },
  ],
} as const;
