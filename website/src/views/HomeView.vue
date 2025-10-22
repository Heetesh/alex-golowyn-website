<template>
	<main>
		<!-- <AspectRatio :ratio="16 / 9" class="min-w-full h-96">
			<img :src="heroImage" alt="Main page photo depicting a calming scene at with cliff overlapping on a beach."
				class="w-full h-full  object-fill  md:object-cover object-center">
		</AspectRatio> -->
		<div class="h-60 w-full  border-red-500 border-4 text-center">Image goes here</div>

	</main>
</template>

<script lang="ts">

import AspectRatio from '@/components/ui/aspect-ratio/AspectRatio.vue';

import HeroImage from '@/assets/cliff_sunset_with_beach.jpg'

export default {
	components: {
		AspectRatio,
	},

	data() {
		return {
			heroImage: HeroImage
		}
	},

	methods: {

	},
}
</script>

<style scoped></style>
