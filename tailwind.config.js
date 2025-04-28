/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0052CC', // Azul como cor primária
          dark: '#003D99', // Azul escuro
          light: '#4C9AFF', // Azul claro
        },
        secondary: {
          DEFAULT: '#FFD700', // Amarelo como cor secundária
          dark: '#E6C200', // Amarelo escuro
          light: '#FFEB99', // Amarelo claro
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
