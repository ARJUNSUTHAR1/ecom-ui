/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'syne': ['syne'],
        'apercu': ['apercu'],
      }
    },
  },
  plugins: [],
}
