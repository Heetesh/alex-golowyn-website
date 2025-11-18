export function useBreadcrumbTitle() {
	const route = useRoute();

	const title = computed(() => {
		const path = route.path.split("/")[1];

		if (!path) {
			return "Home";
		}

		const map: Record<string, string> = {
			services: "Services",
			weekly_quotes: "Weekly Quotes",
			weekly_philosophy: "Weekly Philosophy",
			videos: "Videos",
			donations: "Donations",
			reviews: "Reviews",
			contact: "Contact",
			about: "About",
		};

		return map[path];
	});

	return { title };
}
