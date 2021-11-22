const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enobled: true,
    content: [
    'index.html',
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
