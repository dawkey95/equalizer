/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				teal: '#66E2DC',
				orange: '#FA7453',
				yellow: '#FFB964',
				white: '#FCFAF9',
				dark: '#191826',
			},
		},
	},
	plugins: [],
};
