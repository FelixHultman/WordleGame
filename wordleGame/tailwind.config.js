/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,
  },
  content: ['./index.html', './frontend/src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
