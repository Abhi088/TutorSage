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
      }),
      borderRadius: {
        '4px': '0.25rem'
      },
      boxShadow: {
        DEFAULT: '0 10px 15px -3px rgba(27, 85, 226, 0.23921568627450981), 0 4px 6px -2px #4361ee'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
