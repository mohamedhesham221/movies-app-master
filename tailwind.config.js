/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
  ],
  theme: {
    extend: {
      screens: {
        sm: '320px',
      },
      colors: {
        'main-color': '#ff2c1f',
        'text-color': '#020307',
        'bg-color': '#fff'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'home': 'url(../img/home3.jpg)'
      },
      gridTemplateColumns : {
        'auto-fit': 'repeat(auto-fit, minmax(180px, auto))'
      }
    },
  },
  plugins: [],
}

