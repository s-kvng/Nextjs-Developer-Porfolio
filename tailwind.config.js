/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      animation: {
        "spin-slow": "spin 7s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0 ,0 ,0, 0.4) 2px, #f5f5f5 5px , #f5f5f5 100px);",
        circularDark:
          "repeating-radial-gradient(rgba(255 ,255 ,255, 0.5) 2px, #1b1b1b 5px , #1b1b1b 100px);",
        circularLightMd:
          "repeating-radial-gradient(rgba(0 ,0 ,0, 0.4) 2px, #f5f5f5 5px , #f5f5f5 80px);",
        circularDarkMd:
          "repeating-radial-gradient(rgba(255 ,255 ,255, 0.5) 2px, #1b1b1b 5px , #1b1b1b 80px);",
        circularLightSm:
          "repeating-radial-gradient(rgba(0 ,0 ,0, 0.4) 2px, #f5f5f5 4px , #f5f5f5  50px);",
        circularDarkSm:
          "repeating-radial-gradient(rgba(255 ,255 ,255, 0.5) 2px, #1b1b1b 4px , #1b1b1b 50px);",
      },
      animation: {
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        slide: "slide var(--speed) ease-in-out infinite alternate",
      },
      keyframes: {
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
