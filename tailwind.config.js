/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-cyan': '#00FFC8',
        'brand-pink': '#FF006B',
        'brand-dark': '#333333',
      },
      fontFamily: {
        'dosis': ['Dosis', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
