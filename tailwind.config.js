/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-brown': {
          light: '#A0522D',
          DEFAULT: '#8B4513',
          dark: '#5C2C06',
        },
        'brand-cream': {
          light: '#FFF8F0',
          DEFAULT: '#F5EEDC',
          dark: '#EFE6D5'
        },
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Poppins', 'sans-serif'],
      },
      // NUEVAS ANIMACIONES
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' },
        }
      }
    },
  },
  plugins: [],
}