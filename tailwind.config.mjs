const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				base: {
					white: '#FFFFFF',
					black: '#000000'
				},
				brand: '#E51F7A',
				neutral: {
					50: '#FAFAFA',
					100: '#EDEFF2',
					200: '#DDE2E8',
					300: '#C8D0D9',
					400: '#B1B9C8',
					500: '#9CA4B8',
					600: '#868CA5',
					700: '#7D8297',
					800: '#2E3038',
					900: '#121316',
				}
			},
		},
		fontFamily: {
			sans: ['Poppins', ...defaultTheme.fontFamily.sans]
		},
	},
	plugins: [],
}
