// https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      xs: '300px',
      // => @media (min-width: 400px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
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
