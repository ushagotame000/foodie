/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx, ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ffc001",
        secondary: "#ff0c01",
      },
    },
    container: {
      center: true,
      padding: {
        default: "1rem",
        sm: "3rem",
      },
    },
  },
  plugins: [],
};
