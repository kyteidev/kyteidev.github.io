/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#000000",
          secondary: "#000000",
          accent: "#2f4da1",
          info: "#4a7aff",
          neutral: "#000000",
          "base-200": "#1d232a",
          "base-100": "#13171c",
          "base-content": "#f3f4f6",
        },
      },
    ],
  },
};
