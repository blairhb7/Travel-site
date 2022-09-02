/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        outline: 'outline',
        },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
        '5000': '5000ms',
        '3000': '3000ms',
        '4000': '4000ms',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('tailwind-scrollbar-hide')
  ],
}
