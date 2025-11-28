<template>
	<UHeader
		title=""
		to="/"
		mode="drawer"
		:menu="{ direction: 'right', ...{} }"
	>
		<UNavigationMenu
			:items="navigationMenuItems"
			content-orientation="vertical"
			:highlight="true"
			color="primary"
		/>
		<!-- template body passes passes the UNavigationMenu to the drawer -->
		<template #body>
			<UNavigationMenu
				:items="navigationMenuItems"
				orientation="vertical"
			/>
		</template>
	</UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuChildItem, NavigationMenuItem } from "@nuxt/ui";

const navigationMenuItems: NavigationMenuItem[] = [
	{
		label: "Home",
		icon: "material-symbols:home",
		to: "/",
	},
	{
		label: "Services",
		icon: "material-symbols:home-repair-service-rounded",
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
		// active: useRoute().path.startsWith("/services"),
	},
	{
		label: "Weekly Quotes",
		icon: "ion:ios-quote",
		to: "/weekly_quotes",
	},
	{
		label: "Weekly Philosophy",
		icon: "ion:ios-quote",
		to: "/weekly_philosophy",
	},
	{
		label: "Videos",
		icon: "material-symbols:hangout-video-rounded",
		to: "/videos",
	},

	{
		label: "Reviews",
		icon: "material-symbols:rate-review-rounded",
		to: "/reviews",
	},
	{
		label: "Contact",
		icon: "material-symbols:contact-phone-rounded",
		to: "/contact",
	},
	{
		label: "Donations",
		icon: "solar:dollar-minimalistic-bold",
		to: "/donations",
	},
	{
		label: "About",
		icon: "ix:about-filled",
		to: "/about",
	},
];
</script>

<style scoped></style>
