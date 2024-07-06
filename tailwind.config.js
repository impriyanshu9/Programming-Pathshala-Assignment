/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode with a class
  content: [
    "./index.html",
    "./contact/index.html",
    "./src/**/*.{html,js}" // Ensure all files are included
  ],
  theme: {
    colors: {
      brand_primary: "#4CAF4F",
      white: "#ffff",
      silver: "#F5F7FA",
      d_grey: "#4D4D4D",
      brand_black: "#263238",
      brand_red: "#CB3A2E"
    },
    extend: {},
  },
  plugins: [],
};
