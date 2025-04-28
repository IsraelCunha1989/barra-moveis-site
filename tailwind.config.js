/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0052CC', // Azul
          dark: '#003D99',
          light: '#4C9AFF',
        },
        secondary: {
          DEFAULT: '#FFD700', // Amarelo
          dark: '#E6C200',
          light: '#FFEB99',
        },
        neutral: {
          DEFAULT: '#f5f5f5',
          dark: '#333333',
          light: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
