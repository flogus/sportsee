/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'seesport': {
          red: '#FF0000',
          darkgrey: '#282D30',
          lightgrey: '#FBFBFB',
          blue: '#4AB8FF',
          yellow: '#F9CE23',
          pink: '#FD5181'
      }
    },
    fontSize: {
        'error': '160px'
    },
    minHeight: {
        '90': '90%',
        '300px': '300px'
      }
    },
  },
  plugins: [],
}