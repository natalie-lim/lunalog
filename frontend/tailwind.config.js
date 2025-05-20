/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'custom-dark-gradient': '#21303f',
        'custom-light-gradient': '#4e4e5d'
      }

    },
  },
  plugins: [],
};
