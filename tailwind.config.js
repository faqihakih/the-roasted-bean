module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "hijau" : "#bbf263"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
