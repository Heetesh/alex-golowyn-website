<template>
	<UApp>
		<NuxtRouteAnnouncer />

		<!-- Wraps a UHeader  -->
		<NavigationMenu />

		<UMain class="relative overflow-hidden">
			<!-- <img
				:src="heroImage"
				class="absolute top-0 left-0 right-0 w-full h-[30vh]  object-cover -z-10 opacity-80 mask-[linear-gradient(to_bottom,black_60%,transparent_100%)]"
				alt="Home page image or hero image."
				loading="eager"
				fetchpriority="high"
			> -->

			<UContainer class="pt-4 grayscale-25 flex items-center justify-center">
				<!-- <img
					:src="heroImage"
					class="rounded-2xl object-contain"
					alt="Home page image or hero image."
					loading="eager"
					fetchpriority="high"
				> -->
				<!-- <NuxtImg
					src="/cliff_sunset_with_beach.webp"
					alt="Home page image or hero image"
					sizes=""
					width="3405"
					height="1228"
					preload
					quality="80"
					format="webp,avif"
					class="rounded-2xl object-contain w-full h-full"
				/> -->
				<!-- <NuxtImg
					src="/cliff_sunset_with_beach.webp"
					alt="Home page image or hero image"
					sizes=""
					width="3405"
					height="1228"
					preload
					quality="80"
					format="webp,avif"
					class="rounded-2xl object-contain w-full h-full"
				/> -->
			</UContainer>

			<!-- <UContainer class="relative z-10 pt-[15vh]">
				<slot />
			</UContainer> -->
			<UContainer class="relative z-2">
				<slot />
			</UContainer>
		</UMain>

		<Footer />
	</UApp>
</template>

<script lang="ts" setup>
import heroImage from "@/assets/images/cliff_sunset_with_beach.jpg";
import Footer from "../components/Navigation/Footer.vue";
</script>

<style scoped></style>
