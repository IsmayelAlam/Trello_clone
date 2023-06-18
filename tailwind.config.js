/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        fullScreen: "calc(100%-10%)",
      },
    },
  },
  plugins: [],
};
