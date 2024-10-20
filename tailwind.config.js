/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        orange: '#FFE492',
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
