/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['Nexarustsans free webfont', "sans-serif"],
        alpina: ["Alpina Typewriter", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      }
    },
  },
  plugins: [],
}

