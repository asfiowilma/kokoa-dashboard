module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        snippet: '40ch',
      },
      maxHeight: {
        63: '15.75rem',
      },
      flex: {
        2: '2 2 0%',
      },
    },
  },
  variants: {
    scrollbar: ['rounded'],
    extend: {},
  },
  plugins: [require('daisyui'), require('ps-scrollbar-tailwind')],
  daisyui: {
    themes: [
      'luxury', // first one will be the default theme
    ],
  },
}
