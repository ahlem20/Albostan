/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown': '#2A260C', // Custom color
        'greener': '#2E6846', 
      },
   
    },
  },
  plugins: [],
  corePlugins: {
    scrollbar: false, // Ensuring scrollbar custom styles are disabled
  },
};
