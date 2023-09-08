/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        solid: '2px 2px #2a2a2a',
        'solid-white': '2px 2px #ffffff',
        'solid-extend': '4px 4px #2a2a2a',
        outline: '-1px -1px 0 #2a2a2a, 1px -1px 0 #2a2a2a, -1px 1px 0 #2a2a2a, 1px 1px 0 #2a2a2a',
      },
      colors: {
        purple: '#7562ab',
        black: '#2a2a2a',
        white: '#ffffff',
        yellow: '#fbe20c',
        grey: '#d4d4d4',
        pink: '#ff84ca',
        blue: '#9FD7FA',
        red: '#F15555',
        green: '#88fe77',
      },
    },
  },
  plugins: [],
};
