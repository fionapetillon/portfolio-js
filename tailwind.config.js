/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'radialGradient' : 'radial-gradient(circle, rgba(146,47,179,1) 0%, rgba(23,2,61,1) 100%)',
      }
    },
  },
  plugins: [],
}