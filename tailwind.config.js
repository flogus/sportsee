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
          lightred: 'rgba(255, 0, 0, 0.1)',
          blue: '#4AB8FF',
          lightblue: 'rgba(74, 184, 255, 0.1)',
          yellow: '#F9CE23',
          lightyellow: 'rgba(249, 206, 35, 0.1)',
          pink: '#FD5181',
          lightpink: 'rgba(253, 81, 129, 0.1)'
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