/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        veryLightGray: 'hsl(0, 0%, 98%)'
      },
      colors: {
        veryDarkBlue: 'hsl(234, 12%, 34%)',
        grayishBlue: 'hsl(229, 6%, 66%)',
        'red-custom': 'hsl(0, 78%, 62%)',
        'cyan-custom': 'hsl(180, 62%, 55%)',
        'orange-custom': 'hsl(34, 97%, 64%)',
        'blue-custom': 'hsl(212, 86%, 64%)'
      }
    },
  },
  plugins: [],
}
