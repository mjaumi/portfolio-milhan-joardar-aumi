module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif'],
      },
      keyframes: {
        'bottom-top-fade-in': {
          '0%': { 'margin-top': '200px', opacity: 0 },
          ' 100%': { 'margin-top': '0px', opacity: 1 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          ' 100%': { opacity: 1 },
        }
      },
      animation: {
        'bottom-top-fade-in': 'bottom-top-fade-in 1s ease-in-out',
        'fade-in': 'fade-in 1s ease-in-out 1s forwards',
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
