<template>
	<div>
		<div v-if="isDesktop">
			<UNavigationMenu
				:items="navigationItems"
				class="bg-primary-50/75 backdrop-blur-md border-b border-default h-20"
			/>
		</div>
		<div v-else>
			<UButton
				class="bg-primary-50/75 backdrop-blur-md border-b border-default h-10 w-full"
				variant="ghost"
				color="neutral"
				size="lg"
				:icon="isDrawerOpen ? 'i-lucide-menu' : 'i-lucide-menu'"
				@click="isDrawerOpen = !isDrawerOpen"
			/>
			<UDrawer
				v-model:open="isDrawerOpen"
				direction="right"
				title="Menu"
				description="Navigation menu"
				modal
				overlay
				:handle="true"
				:ui="{
					overlay: 'bg-primary-50/5 backdrop-blur-xs',
					content: '',
					container: '',
					handle: '',
				}"
			>
				<template #header>
					<p class="text-base flex items-center justify-center">
						Menu
					</p>
				</template>
				<template #body>
					<div class="flex flex-col gap-2">
						<NuxtLink
							v-for="items in navigationItems"
							v-slot="{ isActive, navigate }"
							:key="items.label"
							:to="items.to"
							custom
							class=""
						>
							<UButton
								class="text-center font-medium transition-colors py-4 justify-center"
								:variant="isActive ? 'solid' : 'subtle'"
								:color="isActive ? 'primary' : 'neutral'"
								@click="
									handleMobileNavigationItemClick(navigate)
								"
								>{{ items.label }}</UButton
							>
						</NuxtLink>
					</div>
				</template>
				<!-- <template #footer>
					<UButton class="">Footer </UButton>
				</template> -->
			</UDrawer>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const isDesktop = useIsDesktop();

const isDrawerOpen = ref(false);

const navigationItems = ref([
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
] as NavigationMenuItem[]);

const handleMobileNavigationItemClick = (
	navigate: (e?: MouseEvent) => Promise<unknown>,
) => {
	isDrawerOpen.value = false;
	navigate();
};
</script>

<style scoped></style>
