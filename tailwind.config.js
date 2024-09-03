import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(209, 23%, 22%)",
        veryDarkBlue: {
          background: "hsl(207, 26%, 17%)",
          text: "hsl(200, 15%, 8%)",
        },
        darkGray: "hsl(0, 0%, 52%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontSize: {
        base: "14px",
        detail: "16px",
      },
      fontFamily: {
        sans: ["Nunito Sans", "var(--font-sans)", "sans-serif"],
        mono: ["Nunito Sans", "var(--font-mono)"],
      },
      fontWeight: {
        light: 300,
        semibold: 600,
        bold: 800,
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
