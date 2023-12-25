/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			height: {
				'20v': '11vh',
				'80v': '89vh'
			},
			minHeight:{
				'80v': '80vh'
			}
		},
	},
	plugins: [],
}
