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
    extend: {},
  },
  plugins: [],
}