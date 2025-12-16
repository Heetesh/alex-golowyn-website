// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

	modules: [
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

	ssr: true,

	// debug: {

	// },

	devtools: {
		enabled: true,
	},

	app: {
		head: {
			link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
			titleTemplate: "%s",
			meta: [
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ name: "charset", content: "utf-8" },
			],
		},
	},

	css: ["~/assets/css/main.css"],

	vue: {
		compilerOptions: {
			isCustomElement: tag => ["custom-element"].includes(tag),
		},
	},

	colorMode: {
		preference: "light",
	},

	compatibilityDate: "2025-07-15",

	nitro: {
		preset: "vercel",

	},

	// debug: process.env.NODE_ENV !== "production",

	// hooks: {
	// 	"prerender:routes"({ routes }) {
	// 		routes.clear(); // Do not generate any routes (except the defaults)
	// 	},
	// },

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

	image: {
		provider: "ipx",

	},
});
