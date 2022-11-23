const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#00111C",
        "secondary-blue": "#0097ff",
        "accent-blue": "#0066FF",
        "dark-blue": "#171D37",
      },
      fontFamily: {
        sans: ["var(--font-raleway)", ...fontFamily.sans],
        oswald: "var(--font-oswald)",
        titillium: "var(--font-titillium)",
      },
      dropShadow: {
        "cyan-sm": "0 0 4px rgb(0, 255, 255, 0.25)",
        "blue-sm": "0 0 4px rgba(159, 217, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
