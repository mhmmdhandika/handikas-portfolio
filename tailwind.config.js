/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        default: '900px',
      },
      colors: {
        'primary-light': '#1e293b',
        'secondary-light': '#334155',
      },
    },
  },
  plugins: [],
};
