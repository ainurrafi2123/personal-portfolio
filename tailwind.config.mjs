/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001F',
        'pink-ec': '#EC1552',
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      boxShadow: {
        'black' : '4px 4px 0 #000',
        'white' : '4px 4px 0 #fff',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      },
      animation: {
        'underline-animate': 'underlineAnimation 0.5s ease-out forwards',
      },
      keyframes: {
        underlineAnimation: {
          '0%': { width: '0%', left: '0' },
          '100%': { width: '100%', left: '0' },
        }
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
};
