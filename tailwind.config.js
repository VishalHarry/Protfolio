/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
        sans: ["YourFontFamilyName", "sans-serif"], 
        cursive: ['Pacifico', 'cursive'],// Replace with your font
      },
    },
  },
  plugins: [],
}