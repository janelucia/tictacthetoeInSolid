/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        endlessRiverA: '#43cea2',
        endlessRiverB: '#185a9d',
        purpleBlissA: '#360033',
        purpleBlissB: '#0b8793',
        betweenTheCloudsA: '#73C8A9',
        betweenTheCloudsB: '#373B44',
      },
    },
  },
  plugins: [],
};
