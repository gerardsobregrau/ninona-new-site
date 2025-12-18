/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        ninona: {
          green: '#aacc00', // Approx atom green
          pink: '#e6007e',   // Approx atom pink
          orange: '#f39200', // Approx atom orange
          yellow: '#ffed00', // Approx atom yellow/mix
          blue: '#009fe3',   // Approx atom blue
        }
      },
      keyframes: {
        'text-gradient': {
          '0%': {
            'background-size': '200% 200%',
            'background-position': '0% center'
          },
          '100%': {
            'background-size': '200% 200%',
            'background-position': '200% center'
          },
        },
      },
      animation: {
        'gradient-slow': 'text-gradient 3s linear infinite',
      },
    },
  },
  plugins: [],
}
