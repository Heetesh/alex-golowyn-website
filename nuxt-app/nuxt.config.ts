// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		"@nuxt/content",
		"@nuxt/eslint",
		"@nuxt/hints",
		"@nuxt/image",
		"@nuxt/scripts",
		"@nuxt/test-utils",
		"@nuxt/ui",
		"@nuxt/fonts",
		"@pinia/nuxt",
		"@vueuse/nuxt",
		"motion-v/nuxt",
		"@formkit/auto-animate",
	],

	ssr: false,
	devtools: { enabled: true },

	app: {
		head: {
			link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
		},
	},

	css: ["~/assets/css/main.css"],
	compatibilityDate: "2025-07-15",

	nitro: {
		preset: "netlify-static",
	},

	eslint: {
		config: {
			stylistic: {
				semi: true,
				quotes: "double",
				commaDangle: "always-multiline",
				indent: "tab",
			},
		},
	},

	fonts: {
		defaults: {
			weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
			styles: ["normal", "italic"],
		},
		families: [{ name: "Inter", provider: "google" }],
	},
});
