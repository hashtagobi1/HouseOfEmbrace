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
      // basicShadow: {
      //   filter: "drop-shadow(5px 5px 0px #000)",
      //   border: "10px solid red"
      // },
      fontFamily: {
        hoe_Quest: ['Questrial', "sans-serif"],
        hoe_Bodoni: ['Bodoni Moda', "serif"]
      },
      colors: {
        HOE_MAIN: "#CEADDF",
        HOE_MAIN_LIGHT: "#ebdef2",
        HOE_GREEN_WARM: "#B9E1A8",
        HOE_BACKGROUND: "#FFDCA8"
      }
    },
  },
  plugins: [],
}
