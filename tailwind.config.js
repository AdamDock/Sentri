/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sentriBlue: '#085680',
        sentriBlack: '#322233',
        White: '#ffffff',
        Gold: '#FFE999',
      },
      fontFamily: {
        Times: ['TimesNewRoman', 'sans-serif'],
        Verdana: ['Verdana', 'serif'],
        Arial: ['Arial', 'sans-serif'],
        Acumin: ['Acumin', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

