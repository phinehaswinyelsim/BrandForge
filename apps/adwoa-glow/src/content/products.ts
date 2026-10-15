export type Product = {
  slug: string;
  name: string;
  category: "Face" | "Body" | "Hair";
  size: string;
  price: number;
  description: string;
  ingredients: string[];
  ritual: string;
  visual: "jar" | "dropper" | "bottle" | "mist" | "bar";
  color: "rose" | "cocoa" | "gold" | "ivory";
  badge?: string;
};

export const products: Product[] = [
  {
    slug: "shea-body-balm", name: "Shea Body Balm", category: "Body", size: "200 g", price: 95,
    description: "A cushiony, comfort-first body balm inspired by the richness of shea and the calm of an unhurried evening.",
    ingredients: ["Shea butter", "Cocoa butter", "Baobab oil"], ritual: "Warm a small amount between your palms and smooth over clean, dry skin.", visual: "jar", color: "rose", badge: "A daily favourite",
  },
  {
    slug: "baobab-face-oil", name: "Baobab Face Oil", category: "Face", size: "30 ml", price: 145,
    description: "A light, golden-feeling face oil concept for the last, slow step in your evening ritual.",
    ingredients: ["Baobab oil", "Marula oil", "Vitamin E"], ritual: "Press a few drops gently over moisturised skin. Patch testing is recommended for any real formula.", visual: "dropper", color: "gold", badge: "Small batch concept",
  },
  {
    slug: "cocoa-cloud-body-wash", name: "Cocoa Cloud Body Wash", category: "Body", size: "250 ml", price: 110,
    description: "A creamy cleanser concept with a soft cocoa note and a fresh, just-rinsed finish.",
    ingredients: ["Cocoa extract", "Aloe", "Oat"], ritual: "Lather with water, rinse well, and take one more breath before you go.", visual: "bottle", color: "cocoa",
  },
  {
    slug: "hibiscus-glow-toner", name: "Hibiscus Glow Toner", category: "Face", size: "150 ml", price: 85,
    description: "A refreshing botanical mist concept, made for the pause between cleansing and moisturising.",
    ingredients: ["Hibiscus", "Rose water", "Glycerin"], ritual: "Mist onto clean skin or press in with clean hands. Keep away from eyes.", visual: "mist", color: "rose",
  },
  {
    slug: "botanical-body-polish", name: "Botanical Body Polish", category: "Body", size: "220 g", price: 120,
    description: "A gentle-feeling polish concept with a warm, grounded botanical mood for an occasional reset.",
    ingredients: ["Fine sugar", "Shea butter", "Cocoa"], ritual: "Massage lightly over damp skin, then rinse. Avoid broken or irritated skin.", visual: "jar", color: "gold",
  },
  {
    slug: "daily-glow-cream", name: "Daily Glow Cream", category: "Face", size: "50 ml", price: 125,
    description: "A considered daily cream concept with a quiet finish and a place in the simplest of routines.",
    ingredients: ["Shea fractions", "Baobab", "Aloe"], ritual: "Smooth a small amount onto clean skin as the final step of your morning routine.", visual: "jar", color: "ivory",
  },
  {
    slug: "shea-scalp-oil", name: "Shea & Scalp Oil", category: "Hair", size: "100 ml", price: 80,
    description: "A nourishing oil concept inspired by familiar, hands-on hair care and the ritual of taking your time.",
    ingredients: ["Shea oil", "Castor oil", "Rosemary"], ritual: "Apply sparingly to the scalp or ends. Discontinue use if irritation occurs.", visual: "dropper", color: "cocoa",
  },
  {
    slug: "cocoa-lip-veil", name: "Cocoa Lip Veil", category: "Face", size: "15 g", price: 45,
    description: "A pocket-sized balm concept with a soft cocoa warmth and a simple, comforting feel.",
    ingredients: ["Cocoa butter", "Shea butter", "Beeswax"], ritual: "Apply as needed throughout the day. Do not use if you have a known ingredient sensitivity.", visual: "bar", color: "rose",
  },
];

export const currency = (amount: number) => "GH₵ " + amount.toFixed(2);
export const findProduct = (slug: string) => products.find((product) => product.slug === slug);
