export const brand = {
  name: "Adwoa Glow",
  tagline: "Come back to your own glow.",
  concept: "A radiant, rooted, refined skincare identity inspired by Ghanaian botanicals and everyday care rituals.",
  colors: [
    { name: "Deep cocoa", hex: "#3A211D", role: "Grounding text, marks, and dark surfaces" },
    { name: "Warm blush", hex: "#D99A86", role: "Soft warmth and gentle emphasis" },
    { name: "Soft gold", hex: "#B78A52", role: "Small details and considered highlights" },
    { name: "Ivory", hex: "#F7F0E7", role: "Main page background and calm space" },
    { name: "Porcelain", hex: "#FFFDF9", role: "Product cards and bright contrast" },
  ],
  typography: [
    { role: "Display", family: "Fraunces", use: "Editorial headings, short statements, and campaign lines" },
    { role: "Everyday", family: "Jost", use: "Product details, navigation, forms, and long copy" },
  ],
  clearSpace: "Keep open space around the seed mark equal to its full height. Never crowd it against another element.",
  do: ["Use cocoa artwork on ivory or the reversed mark on cocoa.", "Keep the wordmark and seed mark in their supplied proportions.", "Let blush and gold act as accents against quiet ivory space."],
  dont: ["Do not stretch, rotate, outline, or add effects to the mark.", "Do not place the reversed mark on a pale surface.", "Do not make unverified ingredient, sourcing, efficacy, or safety claims."],
} as const;
