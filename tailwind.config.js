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
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'], // Adding custom font (e.g., 'Poppins')
        'serif': ['Merriweather', 'serif'], // Optionally add another font for serif text
      },
    },
  },
  plugins: [],
  corePlugins: {
    scrollbar: false, // Ensuring scrollbar custom styles are disabled
  },
};
