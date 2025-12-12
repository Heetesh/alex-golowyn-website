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

const navigationMenuItems = computed<NavigationMenuItem[]>(() => [
	{
		label: "Home",
		to: "/",
	},
	{
		label: "Services",
		to: "/services",
		active: useRoute().path.startsWith("/services"),
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
		to: "/weekly_quotes",
	},
	{
		label: "Weekly Philosophy",
		to: "/weekly_philosophy",
	},
	{
		label: "Videos",
		to: "/videos",
	},

	{
		label: "Reviews",
		to: "/reviews",
	},
	{
		label: "Contact",
		to: "/contact",
	},
	{
		label: "Donations",
		to: "/donations",
	},
	{
		label: "About",
		to: "/about",
	},
]);

// const navigationMenuItems: NavigationMenuItem[] = [
// 	{
// 		label: "Home",
// 		to: "/",
// 	},
// 	{
// 		label: "Services",
// 		to: "/services",
// 		active: useRoute().path.startsWith("/services"),
// 		children: [
// 			{
// 				label: "Alpha",
// 				to: "/services/alpha",
// 			},
// 			{
// 				label: "Beta",
// 				to: "/services/beta",
// 			},
// 			{
// 				label: "Charlie",
// 				to: "/services/charlie",
// 			},
// 			{
// 				label: "Delta",
// 				to: "/services/delta",
// 			},

// 		] as NavigationMenuChildItem[],
// 		// active: useRoute().path.startsWith("/services"),
// 	},
// 	{
// 		label: "Weekly Quotes",
// 		to: "/weekly_quotes",
// 	},
// 	{
// 		label: "Weekly Philosophy",
// 		to: "/weekly_philosophy",
// 	},
// 	{
// 		label: "Videos",
// 		to: "/videos",
// 	},

// 	{
// 		label: "Reviews",
// 		to: "/reviews",
// 	},
// 	{
// 		label: "Contact",
// 		to: "/contact",
// 	},
// 	{
// 		label: "Donations",
// 		to: "/donations",
// 	},
// 	{
// 		label: "About",
// 		to: "/about",
// 	},
// ];
</script>

<style scoped></style>
