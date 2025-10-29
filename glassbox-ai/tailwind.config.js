/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // We can add custom fonts and colors here
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#F87171',
          DEFAULT: '#DC2626',
          dark: '#B91C1C',
        }
      },
    },
  },
  plugins: [],
}

