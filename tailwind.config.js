module.exports = {
  content: [
    "./assets/*.liquid",
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
    "./templates/**/*.liquid",
    "./**/*.{liquid,json}"
  ],
  theme: {
    extend: {
      height: {
        "94": "22rem"
      },
    },
  },
  plugins: [],
}
