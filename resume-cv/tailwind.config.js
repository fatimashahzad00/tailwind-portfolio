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
      fontFamily: {
        'poppins': 'Poppins, sans-serif'
      },
      maxWidth: {
        '100': '1000px'
      },
      minHeight: {
        '1xl': '1000px',
        'screen': '100vh',
      },
      gridTemplateColumns:{
       '12': '1fr 2fr',
       '13': '150px 1fr',
       '11': 'repeat(1 1fr)' 
      },
      boxShadow:{
        'grey': '0 35px 55px rgba(0,0,0,0.1)',
       },
      borderWidth: {
        '1': '1px',
      },
      colors:{
        'grey': 'rgba(255, 255, 255, 0.2)',
      },
      width:{
        '50': '200px',
        '12/12': '95%',
        '13/13': '98%',
        '70': '70%',
        '85': '85%',
      },
      height: {
        '50': '200px',
        '2.5': '10px',
      },
      borderRadius:{
        '50': '50%',
      },
      margin: {
        '13': '50px',
        '10': '10px',
      },
      minWidth: {
        '150': '150px',
      },
      screens: {
        'sm': {'max': '600px'},
        // => @media (max-width: 600px) { ... }
  
        'md': {'max':'1000px'},
        // => @media (max-width: 1000px) { ... }
  

      },
      
    },
  },
  plugins: [],
}