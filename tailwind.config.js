module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #4680B9, #386694)',
      },
      colors: {
        main: '#285581',
        cream: '#FAF8F5',
        blue: '#197FE5',
        brown: '#FFB84D',
        darkBlue: '#2A4D6F',
        light: '#F4F6F9',
        gold: '#FFB84D',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
