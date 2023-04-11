/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      textPrimary: "#101828",
      white: "#FFFFFF",
      whiteButton: "#F9F5FF",
      purpleButton: "#7F56D9",
      headerBackground: "#53389E",
      secondaryText: "#E9D7FE",
      tertiaryText: "#667085",
      whitishGrey: "#F4EBFF",
    },
    extend: {},
  },
  plugins: [],
};
