/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        width: 1536,
      },
      colors: {
        primary: "#212121",
        secandari: "#3FD0D4",
      },
      fontFamily: {
        Popins: ["Poppins", "sans-serif"],
        NunitoFont: ["Nunito", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        Opensans: ["Open Sans", "sans-serif"],
        Montez: ["Montez", "serif"],
        Monrope: ["Manrope", "serif"],
      },
    },
  },
  plugins: [],
};
