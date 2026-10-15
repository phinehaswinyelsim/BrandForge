/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        cocoa: "#3A211D",
        blush: "#D99A86",
        gold: "#B78A52",
        ivory: "#F7F0E7",
        paper: "#FFFDF9",
        muted: "#725F56",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
      },
      spacing: { section: "clamp(4rem, 10vw, 9rem)" },
    },
  },
};
