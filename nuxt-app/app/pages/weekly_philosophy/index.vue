<template>
	<div>
		<UPageSection
			title="Weekly Philosphy"
			orientation="vertical"
		>
			<ClientOnly>
				<div v-if="weeklyPhilosophiesPending">
					<UProgress
						animation="carousel"
						class=""
					/>
					<p class="py-2">
						Loading data...
					</p>
				</div>
				<div
					v-else
					class="relative grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between"
				>
					<UPageCard
						v-for="philosophy in weeklyPhilosophies"
						:key="philosophy.text"
						highlight
						variant="subtle"
						spotlight
						spotlight-color="primary"
						:description="philosophy.text"
						class="font-semibold"
					>
						<template #footer>
							<UUser :name="philosophy.authorName" />
						</template>
					</UPageCard>
				</div>
			</ClientOnly>
		</UPageSection>
	</div>
</template>

<script lang="ts" setup>
useHead({
	title: "Alex Golowyn - Weekly Philosophy",
	meta: [],
});

const { data: weeklyPhilosophies, pending: weeklyPhilosophiesPending } = useFetch("/api/weeklyPhilosophy", { key: "cachedWeeklyPhilosophy", lazy: true, getCachedData: key => useNuxtApp().payload.data[key] || useNuxtApp().static.data[key] });
</script>

<style scoped></style>
