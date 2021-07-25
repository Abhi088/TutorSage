module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'mobile': '490px',
      },
      colors: {
        primary: {
          dark: "#1e3b8a",
          medium: "#4361ee",
          light: "#bccff7"
        },
        secondary: {
          dark: "#000000",
          light: "#888ea8"
        },
        success: {
          dark: "#046304",
          light: "#1abc9c"
        },
        danger: {
          dark: "#87100c",
          light: "#e7515a"
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
      borderWidth: {
        '3': '3px'
      },
      boxShadow: {
        primary: '0 10px 20px -10px #4361ee',
        success: '0 10px 20px -10px #046304',
        danger: '0 10px 20px -10px #87100c',
        gray: '5px 5px 10px gray'
      },
      maxWidth: {
        '26rem': '26rem'
      },
      width: {
        '8.5': '34px',
        '14': '56px'
      },
      height: {
        '4.5': '18px',
        '14': '56px'
      },
      fontSize: {
        '2xs': '0.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
