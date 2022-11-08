/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'seesport': {
          darkgrey: '#282D30',
          lightgrey: '#FBFBFB',
          red: '#FF0000',
          lightred: '#F9E5E4',
          blue: '#4AB8FF',
          lightblue: '#E4F2FA',
          yellow: '#F9CE23',
          lightyellow: '#FAF4DF',
          pink: '#FD5181',
          lightpink: '#F9E5EB'
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
  safelist: [
    'bg-seesport-red',
    'bg-seesport-lightred',
    'bg-seesport-blue',
    'bg-seesport-lightblue',
    'bg-seesport-yellow',
    'bg-seesport-lightyellow',
    'bg-seesport-pink',
    'bg-seesport-lightpink'
  ],
  plugins: [],
}