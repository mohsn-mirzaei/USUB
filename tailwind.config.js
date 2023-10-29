/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#5A00FB",
      secondary: "#EED4C9",
      black: "#1B262C",
      blackLight: "#32383C",
      danger: "#E05176",
    },
    extend: {},
  },
  plugins: [],
};
