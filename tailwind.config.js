/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        cursor: "cursor .6s linear infinite alternate",
        typing: "typing 1.8s ease-out 1.2s 1 normal both",
      },
      transformOrigin: {
        "top-center": "top center",
      },
      keyframes: {
        rotateX: {
          "0%": { opacity: "0", transform: "rotateX(-90deg)" },
          "50%": { transform: "rotateX(-20deg)" },
          "100%": { opacity: "1", transform: "rotateX(0deg)" },
        },
        typing: {
          "0%": { width: "0ch" },
          "10%, 15%": { width: "1ch" },
          "20%, 25%": { width: "2ch" },
          "30%, 35%": { width: "3ch" },
          "40%, 45%": { width: "4ch" },
          "50%, 55%": { width: "5ch" },
          "60%, 65%": { width: "6ch" },
          "70%, 75%": { width: "7ch" },
          "80%, 85%": { width: "7.4ch" },
          "90%, 95%": { width: "full" },
          "100%": { width: "100%" },

          // "0%": { width: "0" },
          // "10%, 15%": { width: "11%" },
          // "20%, 25%": { width: "22%" },
          // "30%, 35%": { width: "33%" },
          // "40%, 45%": { width: "44%" },
          // "50%, 55%": { width: "55%" },
          // "60%, 65%": { width: "66%" },
          // "70%, 75%": { width: "77%" },
          // "80%, 85%": { width: "88%" },
          // "90%, 95%": { width: "100%" },
        },
        cursor: {
          "0%, 40%": { opacity: "1" },
          "60%, 100%": { opacity: "0" },
        },
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
