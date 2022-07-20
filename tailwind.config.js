/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        franklin: 'Libre Franklin',
      },
      colors: {
        logoDarker: '#3D9298',
        logoDark: '#4BC0C8',
        logoLight: '#6ECDDA',
        logoLighter: '#B6EBF6',
      },
    },
  },
  plugins: [],
};
