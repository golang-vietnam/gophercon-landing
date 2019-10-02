// https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        blue: '#0ADBDE',
        primary: '#6566A3',
        secondary: '#3E358A',
        grey: '#414143',
      },
      fontFamily: {
        sans: ['Avenir Next', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [
    function({ addVariant, e }) {
      addVariant('disabled', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`disabled${separator}${className}`)}:disabled`
        })
      })
    },
  ],
}
