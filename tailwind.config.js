/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homeHeader: "url('/src/assets/background/BgHome.webp')",
        login: "url('/src/assets/background/bgLogin.webp')",
        forgot: "url('/src/assets/background/bgForgot.webp')",
        history: "url('/src/assets/background/bgHist.webp')",
        payment: "url('/src/assets/background/bgPayments.webp')",
      },
      fontFamily: {
        Poppins: "'Poppins', sans-serif",
        Rubik: "'Rubik', sans-serif",
      },

      spacing: {},
      colors: {
        yellow: "#ffba33",
        secondary: "#6a4029",
        accents: "#f8f8f8",
        brown: "#895537",
        black: "#000000",
        Darkblue: "#0b132a",
        greyFont: "#4f5665",
        hoverWhite: "#eeeff2",
        hoverYellow: "#ffdd00",
        sdwYellow: "#ffba3366",
        bgMother: "#88B788",
        bgFather: "#F5C361",
        bgDoctor: "#C59378",
        bgSport: "#DCD101",
        abu: "hsla(0, 3%, 94%, 1)",
        orange: "#F47B0A",
      },
    },
  },
  plugins: [],
};
