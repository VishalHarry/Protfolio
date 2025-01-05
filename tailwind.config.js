/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6F61", // Replace with your primary color
        secondary: "#2D2D2D", // Replace with your secondary color
        background: "#F5F5F5", // Background color
      },
      fontFamily: {
        sans: ["YourFontFamilyName", "sans-serif"], // Replace with your font
      },
    },
  },
  plugins: [],
}