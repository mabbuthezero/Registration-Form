module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: {
        DEFAULT: '#ea580c',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
