const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xsm: "450px",
      "2xsm": "350px",
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        bounce2: "bounce 1.5s infinite",
      },
    },
  },
  plugins: [],
};
