<template>
	<div>
		<UPage>
			<UPageSection
				title="Our Services"
				description="Check out what we have to offer."
				orientation="vertical"
			>
				<UPageGrid
					class="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					<UPageCard
						v-for="(card, index) in servicesCard"
						:key="index"
						v-bind="card"
					/>
				</UPageGrid>
			</UPageSection>
		</UPage>
	</div>
</template>

<script lang="ts" setup>
useHead({
	title: "Alex Golowyn - Services",
	meta: [],
});

const servicesCard = useServicesCards();
</script>

<style scoped></style>
