import theme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure this line exists
  ],
  theme: {
    fontFamily: {
      // Add your custom font here if you have one
      // We merge 'Inter' with the default sans-serif fonts from Tailwind
      sans: ['Inter', ...theme.fontFamily.sans],
    },
    extend: {
      colors: {
        // Add your brand colors here
        primary: {
          light: '#F87171',
          DEFAULT: '#DC2626',
          dark: '#B91C1C',
        }
      },
      // The fontFamily is now outside 'extend' to correctly merge with the default
    },
  },
  plugins: [],
}

