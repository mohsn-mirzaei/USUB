/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#5A00FB",
      secondary: "#EED4C9",
      opacity: "#eed4c978",
      black: "#1B262C",
      blackLight: "#32383C",
      danger: "#E05176",
      backgroundDark: "#0A0440",
      backgroundLight: "#12124D",
      green: "#67E1CC",
      yellow: "#F9DC4B",
    },
    extend: {},
  },
  plugins: [],
};
