import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        base: {
          white: '#FFFFFF',
          black: '#000000',
        },
        primary: '#E51F7A',
        neutral: {
          50: '#FAFAFA',
          100: '#EDEFF2',
          200: '#DDE2E8',
          300: '#C8D0D9',
          400: '#B1B9C8',
          500: '#9CA4B8',
          600: '#4B4F5C',
          700: '#2E3038',
          800: '#1B1C1F',
          900: '#040A12',
        },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}
