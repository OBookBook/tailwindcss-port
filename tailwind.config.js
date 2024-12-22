/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // https://tailwindcss.com/docs/configuration
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          100: "#ebf8ff",
          300: "#90cdf4",
          500: "#4299e1",
        },
      },
    },
  },
  plugins: [],
};
