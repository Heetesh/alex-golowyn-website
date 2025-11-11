<template>
	<div class="flex flex-col gap-4">
		<!-- <br />
		1 weekly Quotes
		<br />
		1 weekly_philosophy
		<br />3 reviews
		<br />

		<h1>Website introduction.</h1> -->

		<UBadge  size="xl" class="mx-4">
			This is an introduction text. Alex's website introduction will go
			over here. I am writing this so make sense of space to be occupied
			of the element. Alex will write a proper introduction over here.
			Again, just writing some nonsense to mimic the length of an actual
			introduction paragraph.
		</UBadge>

		<div class="flex flex-col gap-4 mx-4 md:flex-row">
			<UCard class="flex-1 h-60 bg-accented">
				<template #header>
					<h1 class="font-semibold">Weekly Quote</h1>
				</template>
				<p class="text-2xl font-semibold">
					The pen is mightier than the sword.
				</p>
				<template #footer>
					<p class="text-sm">Edward Bulwer-Lytton</p>
				</template>
			</UCard>

			<UCard class="flex-1 h-60 bg-accented">
				<template #header>
					<h1 class="font-semibold">Weekly Philosophy</h1>
				</template>
				<p class="text-2xl font-semibold">
					Success is not final, failure is not fatal; it is the
					courage to continue that counts.
				</p>
				<template #footer>
					<p class="text-sm">Winston Churchill</p>
				</template>
			</UCard>
		</div>

		<!-- Marquee Testimonial -->

		<UBadge class="mx-4 flex justify-center text-2xl mt-4"
			>Success Stories</UBadge
		>
		<UMarquee
			pause-on-hover
			:overlay="false"
			:ui="{
				root: '[--gap:--spacing(4)] [--duration:35s]',
				content: 'w-auto py-1',
			}"
			class="m-4 bg-muted mt-0"
		>
			<UPageCard
				v-for="(testimonial, index) in testimonials"
				:key="index"
				variant="subtle"
				:description="testimonial.quote"
				:ui="{
					description:
						'before:content-[open-quote] after:content-[close-quote] line-clamp-3 text-base',
				}"
				class="w-64 shrink-0 bg-elevated h-40"
			>
				<template #footer>
					<UUser
						v-bind="testimonial.user"
						size="xl"
						:ui="{ description: 'line-clamp-1' }"
					/>
				</template>
			</UPageCard>
		</UMarquee>
	</div>
</template>

<script lang="ts">
import type { UserProps } from "@nuxt/ui";

interface Testimonial {
	user: UserProps;
	quote: string;
}

export default {
	data() {
		return {
			testimonials: [
				{
					user: {
						name: "Michael Chen",
						description: "",
					},
					quote: "Transformed my mindset from fixed to growth in just weeks.",
				},
				{
					user: {
						name: "David Thompson",
						description: "",
					},
					quote: "Finally achieved work-life balance after years of struggling.",
				},
				{
					user: {
						name: "James Wilson",
						description: "",
					},
					quote: "Went from unsure to unstoppable with the right guidance.",
				},
				{
					user: {
						name: "Sarah Johnson",
						description: "",
					},
					quote: "Alex helped me find clarity and purpose I never knew I had.",
				},
			] as Testimonial[],
		};
	},
};
</script>

<style scoped></style>
