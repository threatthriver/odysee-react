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
          50: '#FFF7ED',
          100: '#FFE4CC',
          200: '#FFD1A8',
          300: '#FFB777',
          400: '#FF9D47',
          500: '#FF8516', // Saffron
          600: '#E66C00',
          700: '#B35300',
          800: '#803C00',
          900: '#4D2400',
        },
        secondary: {
          50: '#F0FFF4',
          100: '#D1FFE0',
          200: '#A3FFCC',
          300: '#75FFB8',
          400: '#47FFA3',
          500: '#19FF8F', // Indian Green
          600: '#00E673',
          700: '#00B359',
          800: '#008040',
          900: '#004D26',
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
        display: ['Yatra One', 'cursive'],
        sans: ['Mukta', 'sans-serif'],
        handwriting: ['Kalam', 'cursive']
      },
      backgroundImage: {
        'rangoli-pattern': "url('/patterns/rangoli.svg')",
        'mandala-light': "url('/patterns/mandala-light.svg')",
      },
      animation: {
        'color-shift': 'color-shift 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'color-shift': {
          '0%, 100%': { color: '#FF8516' },
          '33%': { color: '#19FF8F' },
          '66%': { color: '#FF47A3' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
