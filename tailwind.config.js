/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter", "Roboto", "sans-serif"],
      code: ["Consolas"],
    },
  },
  plugins: [],
};
