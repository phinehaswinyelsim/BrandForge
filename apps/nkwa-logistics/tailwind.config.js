/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        forest: "#0B3D2E",
        amber: "#FFB703",
        paper: "#F6F5EF",
        charcoal: "#14241E",
        muted: "#53645D",
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial", "sans-serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
      },
      spacing: { section: "clamp(4rem, 10vw, 9rem)" },
    },
  },
};
