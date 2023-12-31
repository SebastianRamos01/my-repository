/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'bebas': ['Bebas Neue', 'sans-serif'],
      'play': ['Playfair Display', 'sans-serif'],
      'major': ['Major Mono Display', 'monospace']
    },
    colors: {
      'blue': '#1f2126',
      'red': '#ff0000',
      'yellow': '#f2b63d',
      'white': '#ffffff',
      'grey': '#D9D9D9',
      'sky-blue': '#33CEFF',
      'orange': '#e34c26',
      'light-blue': '#264de4',
      'green': '#3c873a',
      'white-blue': '#88dded'
    }
  },
  plugins: [],
}

