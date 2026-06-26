/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        handly: {
          '50': '#E6F4EF',
          '100': '#CCEADF',
          '200': '#99D5BF',
          '300': '#66BF9F',
          '400': '#33AA7F',
          '500': '#158F72',
          '600': '#0E6B55',
          '700': '#0A5444',
          '800': '#073D33',
          '900': '#052622',
        },
      },
    },
  },
  plugins: [],
};
