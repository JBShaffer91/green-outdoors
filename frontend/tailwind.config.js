// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,css}'
  ],
  theme: {
    extend: {
      colors: {
        militaryGreen: '#4B5320',
        desertTan:     '#D2B48C',
        charcoal:      '#333333',
        signalRed:     '#D64545',
        slate:         '#708090',
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        body:    ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'hero-photo': "url('/assets/hero-photo.jpg')",
        'hero-topo':  "url('/assets/hero-topo.svg')",
      },
    },
  },
  plugins: [],
}