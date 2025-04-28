/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        militaryGreen: '#4B5320',  // primary
        desertTan:     '#D2B48C',  // secondary
        charcoal:      '#333333',  // neutral
        signalRed:     '#D64545',  // accent
        slate:         '#708090',  // support
      },
      fontFamily: {
        heading: ['Oswald','sans-serif'],
        body:    ['Roboto','sans-serif'],
      },
      backgroundImage: {
        // we’ll use these in our hero section later
        'hero-photo': "url('/assets/hero-photo.jpg')",
        'hero-topo':  "url('/assets/hero-topo.svg')",
      }
    },
  },
  plugins: [],
}
