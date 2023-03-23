/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(220px, auto))',
      },
      padding :{
        '5': '50px',
        '8': '8%',
        '40': '400px'
      },
      screens: {
        'sm': { 'max': '575px' },
        // => @media (max-width: 575px) { ... }

        'md': { 'max': '720px' },
        // => @media (max-width: 720px) { ... }

        'lg': { 'max': '1140px' },
        // => @media (max-width: 1140px) { ... }

        'xl': { 'max': '1560px' },
        // => @media (max-width: 720px) { ... }

      },
    },
  },
  plugins: [],
}