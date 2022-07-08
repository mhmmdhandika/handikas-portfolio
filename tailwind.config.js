/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        default: '900px',
      },
      colors: {
        primary: '#1e293b',
      },
    },
  },
  plugins: [],
};
