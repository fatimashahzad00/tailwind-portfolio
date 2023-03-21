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
      transitionDuration: {
        '400': '.4s',
        '300' : '.3s',
      },
      screens: {
        xs: "350px",
				sm: "640px",
				// => @media (min-width: 640px) { ... }

				md: "768px",
				// => @media (min-width: 768px) { ... }

				lg: "1055px",
				// => @media (min-width: 1024px) { ... }

				xl: "1195px",
				// => @media (min-width: 1280px) { ... }

				"2xl": "1315px",
				// => @media (min-width: 1536px) { ... }
			},
    },
  },
  variants: {},
  plugins: [],
}