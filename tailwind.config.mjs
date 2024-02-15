/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			height: {
				'85v': '85vh',
				'100v': '100vh'

			},
			backgroundImage:{
				'index-hero': "url('/src/assets/vienna-kota-bg.jpg')"
			}
		},
	},
	plugins: [],
}
