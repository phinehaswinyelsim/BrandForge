export type MenuCategory = "Plates" | "From the fire" | "Sides & sips";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  note?: string;
};

export const menuCategories: Array<"All" | MenuCategory> = [
  "All",
  "Plates",
  "From the fire",
  "Sides & sips",
];

export const menuItems: MenuItem[] = [
  {
    id: "charcoal-chicken",
    name: "Charcoal chicken plate",
    description: "Grilled chicken, jollof rice, fresh slaw, and house pepper.",
    price: 78,
    category: "Plates",
    note: "A table favourite",
  },
  {
    id: "tilapia",
    name: "Whole grilled tilapia",
    description: "Lime, ginger, and pepper over the fire. Served with banku.",
    price: 112,
    category: "Plates",
  },
  {
    id: "beef-skewers",
    name: "Suya beef skewers",
    description: "Smoky beef, suya spice, sliced onion, and a squeeze of lime.",
    price: 64,
    category: "From the fire",
  },
  {
    id: "grill-wings",
    name: "Pepper grill wings",
    description: "Six flame-kissed wings tossed in a bright, warm pepper glaze.",
    price: 58,
    category: "From the fire",
  },
  {
    id: "jollof-beef",
    name: "Jollof and beef",
    description: "Smoky jollof rice, grilled beef, and a little shito on the side.",
    price: 72,
    category: "Plates",
  },
  {
    id: "kelewele",
    name: "Kelewele bowl",
    description: "Ginger-spiced ripe plantain with roasted groundnuts.",
    price: 32,
    category: "Sides & sips",
  },
  {
    id: "yam-chips",
    name: "Crisp yam chips",
    description: "Golden yam, lightly salted, with house pepper dip.",
    price: 28,
    category: "Sides & sips",
  },
  {
    id: "sobolo",
    name: "Chilled sobolo",
    description: "Hibiscus, ginger, and pineapple. Poured cold.",
    price: 18,
    category: "Sides & sips",
  },
];

export const currency = (amount: number) => `GH₵ ${amount.toFixed(2)}`;
