/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        typing: 'typing 1.8s ease-out .8s 1 normal both',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transformOrigin: {
        'top-center': 'top center',
      },
      keyframes: {
        rotateX: {
          '0%' : {opacity: '0', transform: 'rotateX(-90deg)'},
          '50%': {transform: 'rotateX(-20deg)'},
          '100': {opacity: '1', transform: 'rotateX(0deg)'}
        },
        typing: {
          '0%': { width: '0ch' },
          '10%, 15%': { width: '1ch' },
          '20%, 25%': { width: '2ch' },
          '30%, 35%': { width: '3ch' },
          '40%, 45%': { width: '4ch' },
          '50%, 55%': { width: '5ch' },
          '60%, 65%': { width: '6ch' },
          '70%, 75%': { width: '7ch' },
          '80%, 85%': { width: '8ch' },
          '90%, 95%': { width: '9ch' },
        },
        cursor: {
          '0%, 40%': {opacity: '1'},
          '60%, 100%': {opacity: '0'},
        }
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
