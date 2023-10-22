/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    colors: {
      primary: "#E54065",
      secondary: "#F4F5F9",
      borderGrey: "#CFD2DC",
      textGrey: "#636363",
      filterGrey: "#E1E4EA",
      readWhite: "#F2F2F2"
    }
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}