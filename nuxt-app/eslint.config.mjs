// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
	rules: {
		// Prevent self-closing HTML elements (like <div />)
		"vue/html-self-closing": ["error", {
			html: {
				// void: "always", // <img /> - keep self-closing
				normal: "never", // <div></div> - never self-close
				// component: "always", // <MyComponent /> - keep self-closing
			},
		}],
	},
});
