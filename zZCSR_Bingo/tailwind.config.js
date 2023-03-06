// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'arvo': ['Arvo', 'serif'],
        'monoton': ['Monoton', 'cursive']
      }
    },
    screens: {
      'tablet': '855px',
      'desktop': '950px',
      'wide': '1400px'
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}
