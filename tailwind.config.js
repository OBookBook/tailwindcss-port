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
        body: "#050505",
        "selected-text": "red",
        theme: "#5c318c",
        secondary: "#9191A4",
        badge: "#3F3F51",
        inputBorder: "#565666",
        input: "#2A2A33",
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
