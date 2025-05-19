const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {

  content: [
    './src/Pages/**/*.{js,ts,jsx,tsx}',
    './src/PageComponents/**/*.{js,ts,jsx,tsx}',
    './src/Components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xxs: '320px',
      xs: '480px',
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        title: ['PlayfairDisplay-Italic', 'cursive'],
        text: ['Open Sans', 'sans-serif']
      },
      opacity: {
        10: '0.1',
        20: '0.2',
        30: '0.3',
        40: '0.4',
        60: '0.6',
        70: '0.7',
        80: '0.8'
      },
      inset: {
        '0.5rem': '0.5rem',
        '1rem': '1rem',
        '2rem': '2rem',
        '3rem': '3rem',
        '4rem': '4rem',
        '6rem': '6rem',
        '50p': '50%',
        '80p': '80%'
      },
      height: {
        '19rem': '19rem',
        '20rem': '20rem',
        '21rem': '21rem',
        '22rem': '22rem',
        '25rem': '25rem',
        '27rem': '27rem',
        '28rem': '28rem',
        '29rem': '29rem',
        '33rem': '33rem',
        '36rem': '36rem',
        '38rem': '38rem',
        '40rem': '40rem',
        '48rem': '48rem',
        '55rem': '55rem',
        '60vh': '60vh',
        '90vh': '90vh',
        fitContent: 'fit-content'
      },
      width: {},
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
        primaryText: 'var(--text-color)',
        background: 'var(--background-color)',
        almondColor: '#efdbca'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
