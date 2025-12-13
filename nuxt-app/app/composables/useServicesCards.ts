import type { PageCardProps } from "@nuxt/ui";

export const useServicesCards = () => {
	const serviceCards: PageCardProps[] = [
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
	];

	return serviceCards;
};
