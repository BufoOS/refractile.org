/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    colors: {
      iconcol: {
        light: '#1F1F1F',
        dark: '#e6e6e9',
      },
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#e6e6e9',
        black: '#1F1F1F',
        blue: '#2c5784',
        gray: '#76767f',
        brown: '#975d0c',
        background: {
          dark: '#1F1F1F',
          light: '#e6e6e9',
        },
        foreground: {
          dark: '#1F1F1F',
          light: '#e6e6e9',
        },
        bufobackground: {
          dark: '#2c5784',
          light: '#76767f',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
