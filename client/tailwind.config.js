/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      width: {
        container: '1212px',
      },
      colors: {
        'custom-blue': '#2e83c4',
        'custom-green': '#74be3b',
      },
    },
  },
  plugins: [],
};
