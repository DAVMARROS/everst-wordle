/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        correct: '#6AAA64',
        warning: '#CEB02C',
        incorrect: '#939B9F',
        back: '#F3F3F3',
        dark: '#262B3C',
        border: '#888FB5',
        title: '#202537',
        headerDark: '#2B3041',
        boardDark: '#303546',
        darkTitle: '#DADCE0',
        defaultKey: '#D3D6DA',
        defaultKeyDark: '#565F7E',
        correctKey: '#66A060',
        incorrectKey: '#818181',
      },
      maxWidth: {
        modal: '546px',
      },
      fontSize: {
        button: ['28px', '32px'],
      },
      padding: {
        empty: '36px',
      },
    },
  },
  plugins: [],
}
