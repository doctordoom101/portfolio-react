/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FDF3E9',
        secondary: '#FCDFFF',
        ungu: "#C4A1FF",
        lightRed: "#FFC0CB",
        orange: "#FFA07A",
        pink: "#FFB2EF",
        yellow: "#FFDB58",
        green: "#90EE90",
      },
      fontFamily: {
        kaushan: "Kaushan Script",
        inria: "Inria Sans",
      }
    },
  },
  plugins: [],
}