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
      light: ["Roboto-Light", "sans-serif"],
      regular: ["Roboto-Regular", "sans-serif"],
      medium: ["Roboto-Medium", "sans-serif"],
    },
    spacing: {
      base: "4px",
      "2xs": "8px",
      xxs: "12px",
      xs: "16px",
      sm: "24px",
      md: "32px",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
