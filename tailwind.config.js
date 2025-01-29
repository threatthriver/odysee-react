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
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        dark: {
          100: '#1E1E1E',
          200: '#2D2D2D',
          300: '#3D3D3D',
          400: '#4D4D4D',
          500: '#5D5D5D',
        },
        accent: {
          50: '#FFF0F7',
          100: '#FFD1E6',
          200: '#FFB3D6',
          300: '#FF94C5',
          400: '#FF75B4',
          500: '#FF47A3', // Indian Pink
          600: '#E600A3',
          700: '#B3007F',
          800: '#80005C',
          900: '#4D0038',
        },
        spice: {
          turmeric: '#FFC107',
          saffron: '#FF9800',
          cardamom: '#4CAF50',
          cinnamon: '#795548'
        }
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        handwriting: ['Kalam', 'cursive']
      },
      backgroundImage: {
        'rangoli-pattern': "url('/patterns/rangoli.svg')",
        'mandala-light': "url('/patterns/mandala-light.svg')",
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'color-shift': 'color-shift 8s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'color-shift': {
          '0%, 100%': { color: '#FF8516' },
          '33%': { color: '#19FF8F' },
          '66%': { color: '#FF47A3' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
