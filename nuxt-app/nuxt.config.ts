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

	// The initial strategy was to render this as a SPA but SSR makes sense.
	// This project will be uploaded to vercel which offers first class SSR support.
	ssr: true,

	devtools: {
		enabled: true,
	},

	app: {
		head: {
			title: "Alex Golowyn", // default fallback title
			link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],

		},
	},

	css: ["~/assets/css/main.css"],

	colorMode: {
		// Colour mode will always be light as per client preference
		// TODO: Consider not forcing light mode but rather have the same colour palettes for light & dark
		// FOR NOW = keeping forced light mode
		preference: "light",
	},

	compatibilityDate: "2025-07-15",

	nitro: {
		preset: "vercel",

	},

	// debug: process.env.NODE_ENV !== "production",

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
