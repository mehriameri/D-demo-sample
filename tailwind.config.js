/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "580px",
        // => @media (min-width: 580px) { ... }
      },
      gridTemplateRows: {
        12: "repeat(12, minmax(0, 1fr))",
        // => Simple 8 row grid
      },
    },
  },
  plugins: [],
};
