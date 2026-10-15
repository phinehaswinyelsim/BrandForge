/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        ink: "#10111D",
        paper: "#F8F7F5",
        accent: "#FA7467",
        muted: "#B8B7C4",
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial", "sans-serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
      },
      spacing: {
        section: "clamp(4rem, 10vw, 9rem)",
      },
    },
  },
};
