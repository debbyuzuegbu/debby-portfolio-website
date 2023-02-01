/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{html,js,jsx}"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
}
