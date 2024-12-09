/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        orange: '#F5D28E',
        green: '#92A581',
        yellow: '#FFE492',
        blue: '#8ADCFF',
      },
      backgroundImage: {
        title: 'url(./src/assets/images/title-decoration.svg)',
      },
      gridTemplateColumns: {
        '4-sm': '1fr repeat(3, 40px)',
        '4-md': '1fr repeat(3, 60px',
      }
    },
    screens: {
      'sm': '425px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
    }
  },
  plugins: [],
}
