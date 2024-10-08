/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#",
        myBlue: "#274C77",
        myGrey: "#8B8C89",
        anotherGrey: "#E7ECEF",
      },
      fontFamily: {
        montserrat: ["Montserrat", "system-ui"],
      },
    },
  },
  plugins: [],
};
