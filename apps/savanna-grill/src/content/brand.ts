export const brandGuidelines = {
  name: "Savanna Grill",
  tagline: "Fire. Flavour. Friends.",
  concept:
    "A warm, bold grill identity shaped around ember light, open tables, and the pleasure of sharing Ghanaian food.",
  palette: [
    { name: "Charcoal", hex: "#1A1613", role: "Primary background and deep contrast" },
    { name: "Ember", hex: "#E8531C", role: "Heat, highlights, and action" },
    { name: "Savanna gold", hex: "#F2A93B", role: "Warm accents and wayfinding" },
    { name: "Cream", hex: "#FFF4E0", role: "Main light surface and long-form text" },
  ],
  typography: [
    { role: "Display", family: "Anton", use: "Short headlines, strong labels, and campaign type" },
    { role: "Everyday", family: "DM Sans", use: "Menus, body copy, forms, and navigation" },
  ],
  clearSpace: "Keep a clear margin around the mark equal to the height of the flame symbol.",
  do: [
    "Use the cream mark on charcoal or the charcoal mark on cream.",
    "Keep the icon and wordmark in their original proportions.",
    "Use ember and gold as accents with generous cream or charcoal space.",
  ],
  dont: [
    "Do not stretch, rotate, outline, or add effects to the logo.",
    "Do not place the cream mark over a pale surface or the charcoal mark over a dark surface.",
    "Do not invent menu prices, contact details, or business claims for a live business without approval.",
  ],
} as const;
