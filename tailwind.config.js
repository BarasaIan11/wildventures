/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        green:    { DEFAULT: '#2F4F3E', light: '#3d6651', dark: '#1e3328' },
        beige:    { DEFAULT: '#E9DFC8', light: '#f0e9d6', dark: '#d4c9ab' },
        orange:   { DEFAULT: '#C47A2C', light: '#d4903d', dark: '#a8671f' },
        ivory:    { DEFAULT: '#FAF7F2' },
        charcoal: { DEFAULT: '#1E1E1E' },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'sans-serif'],
      },
      screens: { xs: '480px' },
      boxShadow: {
        card:       '0 2px 16px rgba(0,0,0,0.06)',
        'card-hover':'0 16px 48px rgba(0,0,0,0.12)',
        orange:     '0 8px 24px rgba(196,122,44,0.4)',
      },
      animation: {
        'hero-zoom': 'heroZoom 12s ease-out forwards',
        'fade-up':   'fadeUp 0.8s ease forwards',
        'scroll-pulse':'scrollPulse 2s ease-in-out infinite',
      },
      keyframes: {
        heroZoom:    { '0%':{ transform:'scale(1.05)' }, '100%':{ transform:'scale(1)' } },
        fadeUp:      { '0%':{ opacity:'0', transform:'translateY(24px)' }, '100%':{ opacity:'1', transform:'translateY(0)' } },
        scrollPulse: { '0%,100%':{ opacity:'.3', transform:'scaleY(1)' }, '50%':{ opacity:'1', transform:'scaleY(1.2)' } },
      },
      transitionTimingFunction: { smooth: 'cubic-bezier(0.4,0,0.2,1)' },
    },
  },
  plugins: [],
}
