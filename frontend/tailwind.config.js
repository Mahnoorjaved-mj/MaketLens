/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FDFCFA',
        ice: '#E2EDED',
        sage: '#BED0CE',
        teal: '#465C59',
        gold: '#CFA12C',
      },
    },
  },
  plugins: [],
}