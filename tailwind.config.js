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
        "94": "22rem",
        "halfScreen":"50vh",
        "divide-y-1":"border-top-width: 0px; border-bottom-width: 1px;",
        "heiiii": "height: 80%;"
      },
      fontFamily: {
        hoe_Bodoni: ['Bodoni Moda', "serif"]
      },
      colors: {
        HOE_MAIN: "#CEADDF",
        HOE_MAIN_LIGHT: "#ebdef2",
        HOE_GREEN_WARM: "#B9E1A8",
        HOE_BACKGROUND: "#F6F2E9",
        HOE_BODY: "#E6E1CA",
      }
    },
  },
  plugins: [],
}
