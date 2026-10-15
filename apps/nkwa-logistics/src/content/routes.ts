export const towns = ["Tarkwa", "Takoradi", "Accra", "Kumasi"] as const;
export type Town = (typeof towns)[number];

export const routes: Array<{ from: Town; to: Town; distanceKm: number }> = [
  { from: "Tarkwa", to: "Takoradi", distanceKm: 75 },
  { from: "Tarkwa", to: "Accra", distanceKm: 320 },
  { from: "Tarkwa", to: "Kumasi", distanceKm: 275 },
  { from: "Takoradi", to: "Accra", distanceKm: 230 },
  { from: "Takoradi", to: "Kumasi", distanceKm: 370 },
  { from: "Accra", to: "Kumasi", distanceKm: 250 },
];

export function routeDistance(from: Town, to: Town) {
  if (from === to) return 15;
  const match = routes.find((route) => (route.from === from && route.to === to) || (route.from === to && route.to === from));
  return match?.distanceKm ?? 0;
}

export function estimateQuote(from: Town, to: Town, weightKg: number) {
  const distanceKm = routeDistance(from, to);
  const tier = weightKg <= 5 ? "Up to 5 kg" : weightKg <= 20 ? "5 to 20 kg" : "20 to 50 kg";
  const weightFee = weightKg <= 5 ? 10 : weightKg <= 20 ? 30 : 70;
  return { distanceKm, tier, total: Math.round((20 + distanceKm * 0.15 + weightFee) * 100) / 100 };
}

export const currency = (amount: number) => "GH₵ " + amount.toFixed(2);
