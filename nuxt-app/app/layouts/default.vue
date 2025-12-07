<template>
	<UApp>
		<NuxtRouteAnnouncer />

		<SpeedInsights />

		<!-- Wraps a UHeader  -->
		<NavigationMenu />

		<UMain class="relative overflow-hidden">
			<img
				:src="heroImage"
				class="absolute top-0 left-0 right-0 w-full h-[30vh]  object-cover -z-10 opacity-80 mask-[linear-gradient(to_bottom,black_60%,transparent_100%)]"
				alt="Home page image or hero image."
				loading="eager"
				fetchpriority="high"
			>

			<UContainer class="relative z-10 pt-[15vh]">
				<slot />
			</UContainer>
		</UMain>

		<UFooter>
			<template #default>
				<p class="text-muted text-sm">
					Alex Golowyn © {{ new Date().getFullYear() }}
				</p>
			</template>
			<template #left>
				<p class="text-muted text-sm">
					Can add icon or logo here
				</p>
			</template>

			<template #right>
				<p class="text-muted text-sm">
					Can add icon or logo here
				</p>
			</template>
		</UFooter>
	</UApp>
</template>

<script lang="ts" setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
import heroImage from "@/assets/images/cliff_sunset_with_beach.jpg";
</script>

<style scoped></style>
