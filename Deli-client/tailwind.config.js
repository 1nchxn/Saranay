/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#FF4433",
        red: "#FF6868",
        secondary: "#555",
        prigmayBG: "#FCFCFC",
      },
    },
  },
  plugins: [require("daisyui")],
};
