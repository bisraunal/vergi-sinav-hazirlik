/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f5fa',
          100: '#e1ecf5',
          200: '#c5dcee',
          300: '#9ac4e3',
          400: '#67a4d4',
          500: '#4384c4',
          600: '#3169a8',
          700: '#285488',
          800: '#254770',
          900: '#223c5e',
          950: '#16263e',
        },
        sage: {
          50: '#f4f7f5',
          100: '#e6ede8',
          200: '#cfddd3',
          300: '#acc4b4',
          400: '#82a58e',
          500: '#60886e',
          600: '#4a6d56',
          700: '#3c5746',
          800: '#324639',
          900: '#2b3a31',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
