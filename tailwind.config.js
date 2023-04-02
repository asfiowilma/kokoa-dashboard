module.exports = {
  content: [
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
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
  plugins: [require('daisyui'), require('ps-scrollbar-tailwind')],
  daisyui: {
    themes: [
      'luxury', // first one will be the default theme
    ],
  },
}
