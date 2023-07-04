/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'blue': '#1f2126',
      'red': '#ff0000',
      'yellow': '#f2b63d',
      'white': '#ffffff',
      'grey': '#D9D9D9'
    }
  },
  plugins: [],
}

