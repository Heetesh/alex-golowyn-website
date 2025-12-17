<template>
	<div>
		<UPageHero
			headline="Reviews"
			title="Hear what our clients have to say"
		/>

		<!-- <div class="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> -->
		<div v-if="reviewsPending">
			<p>Loading reviews...</p>
		</div>
		<!-- <div class="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
			<div>Test</div>
			<div>Test</div>
			<div>Test</div>
			<div>Test</div>
			<div>Test</div>
			<div>Test</div>
		</div> -->
		<UPageGrid v-else>
			<UPageCard
				v-for="review in reviews"
				:key="review.name"
				variant="solid"
				:title="review.description"
				:description="review.name"
			/>
		</UPageGrid>
	</div>
</template>

<script lang="ts" setup>
import type { Review } from "@@/types/reviews";

useHead({
	title: "Alex Golowyn - Reviews",
	meta: [],
});

const { data: reviews, pending: reviewsPending } = useFetch<Review[]>("/api/reviews", { key: "cachedReviews", lazy: true });
</script>

<style scoped></style>
