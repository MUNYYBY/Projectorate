/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5865F2",
        secondry: "#3BA55D",
        intermediate: "#8F51F4",
        pOrange: "#FF7E07",

        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
      },
      spacing: {
        88: "22rem",
      },
    },
    fontFamily: {
      open: ["Open Sans", "sans-serif"],
      demo: ["Boiling Demo Black", "sans-serif"],
    },
  },
  plugins: [],
};
