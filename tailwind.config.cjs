/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
        logo: ["AktivGrotesk-XBold"],
        main: ["Oswald-Regular", "Oswald-Bold", "Oswald-Medium"],
    },
    extend: {
        colors: {
          Ddarkbluegray: "#171f22",
          darkbluegray: "#212d31",
          Llightbluegray: "#8bbdd3",
          lightbluegray: "#638694",
          Dlightgray: "#616161",
          Ddarkgray: "#484848",
        }
    },
  },
  plugins: [],
}