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
    }
  },
  plugins: [],
}

