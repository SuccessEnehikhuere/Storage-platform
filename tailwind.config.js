module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #4680B9, #386694)',
        'button-gradient': 'linear-gradient(to right, #FFE0B2, #FFCC80)',
        'orange-gradient':
          'linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 100%, #FFF5E5 100%)',
      },

      colors: {
        main: '#285581',
        cream: '#FAF8F5',
        blue: '#197FE5',
        brown: '#FFB84D',
        darkBlue: '#2A4D6F',
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
