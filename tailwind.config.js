module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      maingbg: '#0d192b',
      cardbg: '#14253d',
      linebg: '#2f415b',
      whitebg: '#ffffff',
      'soft-blue': '#8bacda',
      txtcyan: '#00fff7',
    },
    fontFamily: {
      outfit: ['Outfit', 'sans-serif'],
    },
    fontWeight: {
      light: '300',
      regular: '400',
      'semi-bold': '600',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
