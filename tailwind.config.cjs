/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "var(--color-default-black)",
      white: "var(--color-default-white)",
      red: "var(--color-default-red)",
      green: "var(--color-default-green)",
      cyan: "var(--color-bg-cyan)",
      yellow: "var(--color-bg-yellow)",
    },
    fontFamily: {
      light: ["Everett-Light", "sans-serif"],
      regular: ["Everett-Regular", "sans-serif"],
      medium: ["Everett-Medium", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
