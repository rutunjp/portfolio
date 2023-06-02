/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      tags: ['consolas'],
      mono: ['ui-monospace', 'SFMono-Regular'],
    },

    colors: {
      orange: '#D46E5A',
      lightOrange: '#E68C66',
      skin: '#EFEDE0',
      white: '#F9F9F9',
      yellow: '#EACD92',
      black: '#000',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
    },
  },
  plugins: [],
}
