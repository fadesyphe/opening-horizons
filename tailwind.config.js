/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        orange: '#F5D28E',
        green: '#92A581',
        yellow: '#FFE492',
      },
      backgroundImage: {
        'title': 'url(./src/assets/images/title-decoration.svg)',
      },
    },
  },
  plugins: [],
}
