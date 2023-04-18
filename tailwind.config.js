module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif'],
      },
      keyframes: {
        'scroll': {
          '0%': { top: 0 },
          '25%': { top: '-36px' },
          '50%': { top: '-72px' },
          '75%': { top: '-108px' },
          '100%': { top: '-144px' },
        },
        'scroll-sm': {
          '0%': { top: 0 },
          '25%': { top: '-20px' },
          '50%': { top: '-40px' },
          '75%': { top: '-60px' },
          '100%': { top: '-80px' },
        }
      },
      animation: {
        'scroll': 'scroll 5s ease-in-out 2s alternate infinite',
        'scroll-sm': 'scroll-sm 5s ease-in-out 2s alternate infinite',
      },
      gridTemplateRows: {
        'project-card-grid': '40px 120px 1fr',
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        portfolioTheme: {
          primary: '#111111',
          secondary: '#020202',
          accent: '#ffb402',
          neutral: '#ffffff',
          'base-100': '#252525',
        },
      },
    ],
  },
}
