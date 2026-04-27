/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        pamiri: {
          blue: '#006C9A',
          sky: '#E8F6FB',
          gold: '#D6A63A',
          ink: '#111827',
          mist: '#F5F5F7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(17, 24, 39, 0.10)',
        lift: '0 28px 70px rgba(17, 24, 39, 0.14)',
      },
    },
  },
  plugins: [],
};
