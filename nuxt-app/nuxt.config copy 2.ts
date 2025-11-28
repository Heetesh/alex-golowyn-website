export default defineNuxtConfig({
	modules: [
		"@nuxt/ui", // Add this back first
	],
	ssr: false,
	app: {
		head: {
			title: "Test App",
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
			],
		},
	},
});
