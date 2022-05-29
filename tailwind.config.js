module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        portfolioTheme: {
          primary: '#02162b',
          secondary: '#00293a',
          accent: '#70ba65',
          neutral: '#d6d8da',
          'base-100': '#ffffff',
        },
      },
    ],
  },
}
