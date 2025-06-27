/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ms': '320px', // muito pequeno (ex: iPhone SE)
        'mm': '375px', // médio pequeno (ex: iPhone X)
        'ml': '425px', // maior mobile (ex: Pixel 5)
        'mb': '480px',
      },
    },
  },
  plugins: [],
};

export default config;
