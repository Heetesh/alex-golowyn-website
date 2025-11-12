<template>
	<div v-if="isDesktop">
		<UNavigationMenu
			:ui="{ link: 'text-base' }"
			class="flex justify-center items-center bg-accented mb-2"
			:items="navigationItems"
		/>
	</div>

	<div v-else class="flex justify-end rounded-none mb-2">
		<UButton
			icon="i-lucide-menu"
			size="xl"
			variant="solid"
			color="primary"
			class="my-2 mr-2"
			@click="openDrawer"
		/>

		<UDrawer v-model:open="isDrawerOpen" direction="right" :ui="{}">
			<template #body>
				<div class="flex flex-col min-w-full gap-4">
					<NuxtLink
						v-for="items in navigationItems"
						v-slot="{ isActive, navigate }"
						:key="items.label"
						:to="items.to"
						custom
					>
						<UButton
							class="text-center font-medium transition-colors py-4 justify-center"
							:variant="isActive ? 'solid' : 'subtle'"
							:color="isActive ? 'primary' : 'neutral'"
							@click="
								closeDrawer();
								navigate();
							"
							>{{ items.label }}</UButton
						>
					</NuxtLink>
				</div>
			</template>
		</UDrawer>
	</div>

	<!-- <UHeader mode="slideover">
        
    </UHeader> -->
</template>

<script lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

export default {
	data() {
		return {
			navigationItems: [
				{
					label: "Home",
					icon: "",
					to: "/",
				},
				{
					label: "Services",
					icon: "",
					to: "/services",
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
					label: "Donations",
					icon: "",
					to: "/donations",
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
					label: "About",
					icon: "",
					to: "/about",
				},
			] as NavigationMenuItem[],
			isDesktop: useMediaQuery("(min-width: 825px)"),

			isDrawerOpen: false,
		};
	},

	methods: {
		closeDrawer() {
			if (this.isDrawerOpen) {
				this.isDrawerOpen = false;
			}
		},

		openDrawer() {
			if (!this.isDrawerOpen) {
				this.isDrawerOpen = true;
			}
		},
	},
};
</script>

<style scoped></style>
