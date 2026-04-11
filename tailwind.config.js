/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"DM Mono"', "monospace"],
        display: ["Syne", "sans-serif"],
        serif: ['"Instrument Serif"', "serif"],
      },
      colors: {
        gold: "#e8c97a",
        sky: "#7ac3e8",
        rose: "#e87a7a",
      },
    },
  },
  plugins: [],
};
