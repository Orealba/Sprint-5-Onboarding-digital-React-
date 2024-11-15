/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')], // Asegúrate de que Flowbite está registrado como un plugin
};
