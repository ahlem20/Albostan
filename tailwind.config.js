/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { colors: {
      'brown': '#2A260C', // Adding the custom color
      'greener': '#2E6846', 
    },},
  },
  plugins: [],
 corePlugins: {
    // Ensure this is enabled to allow custom scrollbar styles
    scrollbar: false,
  },}