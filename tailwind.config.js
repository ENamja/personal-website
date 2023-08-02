/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
        }
      }
    },
  },
  plugins: [],
}
