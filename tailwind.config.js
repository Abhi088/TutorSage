module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#4361ee",
          light: "rgba(27, 85, 226, 0.23921568627450981)"
        }
      },
      fill: theme => ({
        'primary-light': theme('colors.primary.light'),
      }),
      stroke: theme => ({
        'primary-dark': theme('colors.primary.dark'),
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
