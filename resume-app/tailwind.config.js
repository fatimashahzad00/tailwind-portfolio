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
      padding: {
        'top-45': '45px',
        'left-8%': '8%',
        'right-8%': '8%',
        '130': '130px',
        '15': '15px',
        '3': '10px',
        '7.5': '30px',
        '25': '100px',
        '3.5': '13px',
        '8.5': '35px',
        '2.5': '9px',
        '5.5': '22px',
      },
      letterSpacing: {
        '1': '1px',
        '2': '2px',
      },
      transitionDuration: {
        '400': '0.4s',
        '350': '0.3s'
      },
      width: {
        '380': '380px',
        'half': '35%',
        '100': '430px',
        '150': '550px',
        '500': '1130px',
        '335': '335px',
        '130': '500px',
        '11.5': '45px',
      },
      boxShadow: {
        'white-1': '0px 0px 5px #000, 0px 0px 15px #858585'
      },
      colors: {
        'custom-gray': '#191919',
        'display-gray': '#101010',
        'pink': '#f9004d',
      },
      maxWidth: {
        '95': '95%',
      },
      margin: {
        '0-auto': '0 auto',
        '6.5': '25px',
        '11' : '45px',
        '7.5': '30px',
        '3.5': '15px',
        '5.5': '22px',
        '2.5': '10px',
      },
      fontSize: {
        '7.5xl': '75px',
        '1xl': '22px',
        '50': '50px',
        '23': '23px',
      },
      minHeight: {
        '400': '400px',
      },
      height: {
        '86': '365px',
        '73': '290px',
        '98': '400px',
        '11.5': '45px',
      },
      borderRadius: {
        '20': '20px',
      },
      scale: {
        '135': '1.3'
      },
      screens: {
				sm: "640px",
				// => @media (min-width: 640px) { ... }

				md: "768px",
				// => @media (min-width: 768px) { ... }

				lg: "1024px",
				// => @media (min-width: 1024px) { ... }

				xl: "1280px",
				// => @media (min-width: 1280px) { ... }

				"2xl": "1536px",
				// => @media (min-width: 1536px) { ... }
			},
     
    },
  },
  plugins: [],
}