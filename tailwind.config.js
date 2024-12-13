/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4338ca',
          dark: '#818cf8',
        },
        background: {
          DEFAULT: '#ffffff',
          dark: '#030712', // Darker background
        },
        surface: {
          DEFAULT: '#f3f4f6',
          dark: '#111827', // Darker surface
        },
        panel: {
          DEFAULT: '#ffffff',
          dark: '#0f172a', // Dark blue-gray for cards/panels
        },
        accent: {
          DEFAULT: '#818cf8',
          dark: '#6366f1',
        }
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};