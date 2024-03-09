/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: "'Montserrat', sans-serif",
        body: "'Lato', serif",
      },
    },
  },
  plugins: [],
};
