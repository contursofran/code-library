const { fontFamily } = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

delete colors["lightBlue"]
delete colors["warmGray"]
delete colors["trueGray"]
delete colors["coolGray"]
delete colors["blueGray"]

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "pages/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "./ui/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1360px",
      },
    },
    colors: {
      ...colors,
      "dark-background": "#181622",
      "dark-border": "#24222e",
      "light-background": "#fbfbfb",
      "light-border": "#f5f5f5",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  future: {},
}
