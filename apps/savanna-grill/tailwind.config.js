/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        ink: "#1A1613",
        charcoal: "#1A1613",
        ember: "#E8531C",
        gold: "#F2A93B",
        cream: "#FFF4E0",
        muted: "#C9BDA9",
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
      },
      spacing: { section: "clamp(4rem, 10vw, 9rem)" },
    },
  },
};
