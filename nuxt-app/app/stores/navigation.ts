import type { NavigationMenuChildItem, NavigationMenuItem, PageCardProps } from "@nuxt/ui";

// interface WeeklyQuote {
// 	quote: string;
// 	author: string;
// }

export const useNavigationStore = defineStore("navigation", {
	state: () => ({
		_navigationItems: [
			{
				label: "Home",
				icon: "material-symbols:home",
				to: "/",
				tooltip: { text: "Hello" },
			},
			{
				label: "Services",
				icon: "",
				to: "/services",
				exact: false,
				children: [
					{
						label: "Alpha",
						to: "/services/alpha",
					},
					{
						label: "Beta",
						to: "/services/beta",
					},
					{
						label: "Charlie",
						to: "/services/charlie",
					},
					{
						label: "Delta",
						to: "/services/delta",
					},

				] as NavigationMenuChildItem[],
			},
			{
				label: "Weekly Quotes",
				icon: "",
				to: "/weekly_quotes",
			},
			{
				label: "Weekly Philosophy",
				icon: "",
				to: "/weekly_philosophy",
			},
			{
				label: "Videos",
				icon: "",
				to: "/videos",
			},

			{
				label: "Reviews",
				icon: "",
				to: "/reviews",
			},
			{
				label: "Contact",
				icon: "",
				to: "/contact",
			},
			{
				label: "Donations",
				icon: "",
				to: "/donations",
			},
			{
				label: "About",
				icon: "",
				to: "/about",
			},
		] as NavigationMenuItem[],

		_servicePageCards: [
			{
				title: "Alpha Service",
				description:
					"Alpha Service is the best service for x action. This text will be update later on.",
				spotlight: true,
				spotlightColor: "primary",
				highlight: true,
				to: "/services/beta",
				variant: "subtle",
				ui: {
					root: "shadow-lg",
				},
			},
			{
				title: "Beta Service",
				description:
					"Alpha Service is the best service for x action. This text will be update later on.",
				spotlight: true,
				spotlightColor: "primary",
				highlight: true,
				to: "/services/beta",
				variant: "subtle",
				ui: {
					root: "shadow-lg",
				},
			},
			{
				title: "Charlie Service",
				description:
					"Alpha Service is the best service for x action. This text will be update later on.",
				spotlight: true,
				spotlightColor: "primary",
				highlight: true,
				to: "/services/beta",
				variant: "subtle",
				ui: {
					root: "shadow-lg",
				},
			},
			{
				title: "Delta Service",
				description:
					"Alpha Service is the best service for x action. This text will be update later on.",
				spotlight: true,
				spotlightColor: "primary",
				highlight: true,
				to: "/services/beta",
				variant: "subtle",
				ui: {
					root: "shadow-lg",
				},
			},
			{
				title: "Alpha Service",
				description:
					"Alpha Service is the best service for x action. This text will be update later on.",
				spotlight: true,
				spotlightColor: "primary",
				highlight: true,
				to: "/services/beta",
				variant: "subtle",
				ui: {
					root: "shadow-lg",
				},
			},
			{
				title: "Beta Service",
				description:
					"Alpha Service is the best service for x action. This text will be update later on.",
				spotlight: true,
				spotlightColor: "primary",
				highlight: true,
				to: "/services/beta",
				variant: "subtle",
				ui: {
					root: "shadow-lg",
				},
			},
		] as PageCardProps[],

		weeklyQuote: {
			// quote: "The pen is mightier than the sword.",
			// author: "Edward Bulwer-Lytton",

			title: "The pen is mightier than the sword.",
			description: "Edward Bulwer-Lytton",
			// spotlight: true,
			// spotlightColor: "primary",
			highlight: true,
			to: "/weekly_quotes",
			variant: "subtle",
			spotlight: true,
			spotlightColor: "primary",
			ui: {
				root: "shadow-xl",
			},
		} as PageCardProps,

		weeklyPhilosphy: {
			title:
				"Success is not final, failure is not fatal; it is the courage to continue that counts.",
			description: "Winston Churchill",
			// spotlight: true,
			// spotlightColor: "primary",
			highlight: true,
			to: "/weekly_philosophy",
			variant: "subtle",
			spotlight: true,
			spotlightColor: "primary",
			ui: {
				root: "shadow-xl",
			},
		} as PageCardProps,

		userTestimonialCards: [
			{
				title:
					"Alex helped me find clarity and purpose I never knew I had.",
				description: "Sarah Johnson",
				// spotlight: true,
				// spotlightColor: "primary",
				// highlight: true,
				to: "/weekly_philosophy",
				variant: "outline",
				spotlight: true,
				spotlightColor: "primary",
				ui: {
					root: "shadow-xl",
				},
			},
			{
				title: "Went from unsure to unstoppable with the right guidance.",
				description: "James Wilson",
				// spotlight: true,
				// spotlightColor: "primary",
				// highlight: true,
				to: "/weekly_philosophy",
				variant: "outline",
				spotlight: true,
				spotlightColor: "primary",
				ui: {
					root: "shadow-xl",
				},
			},
			{
				title: "Transformed my mindset from fixed to growth in just weeks.",
				description: "Michael Chen",
				// spotlight: true,
				// spotlightColor: "primary",
				// highlight: true,
				to: "/weekly_philosophy",
				variant: "subtle",
				spotlight: true,
				spotlightColor: "primary",
				ui: {
					root: "shadow-xl",
				},
			},
		] as PageCardProps[],
	}),

	getters: {
		getNavigationItems: (state) => {
			return state._navigationItems;
		},

		getServicesCardsForHomepage: (state) => {
			return state._servicePageCards;
		},

		getWeeklyQuote: (state) => {
			return state.weeklyQuote;
		},

		getWeeklyPhilosophy: (state) => {
			return state.weeklyPhilosphy;
		},

		getUserTestimonialsAsCards: (state) => {
			return state.userTestimonialCards;
		},
	},
});
