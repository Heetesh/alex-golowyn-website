<template>
	<UContainer>
		<UPage>
			<UPageHero
				class=""
				title="Welcome to the website"
				description="Your introduction would go over here Sash. I will write some boiler text to have an idea of the introduction. This can be changed later on to a different layout if you want. Writing some more boiler text and we keep going. We've reached about halfway of the introduction. Maybe some more. I have a page hero or a call to action that hopefully will entice the user to click on the services and/or donate. These would be the main features of the website. We have probably reached close to or near the introduction text length. Let us keep going for good measures. Alright I will stop typing now, haha."
				headline=""
				:links="heroLinks"
				:orientation="useIsDesktop() ? 'horizontal' : 'vertical'"
			>
				<img
					:src="cliffImage"
					class="rounded-lg shadow-2xl ring ring-default"
					alt="Home page image or hero image."
				>
			</UPageHero>

			<UPageSection
				title="Our Services"
				description="Check out what we have to offer."
			>
				<UPageGrid>
					<UPageCard
						v-for="(card, index) in serviceCards"
						:key="index"
						v-bind="card"
					/>
				</UPageGrid>
			</UPageSection>

			<UPageSection
				title="Reviews"
				headline="Check out what our users have to say"
				:orientation="useIsDesktop().value ? 'vertical' : 'vertical'"
				description="I have decided to include reviews at top the top sections. This will be beneficial to the flow and getting user's attention and hopefully it will mean more engagement and clicks on services. This section will be renamed to simple = 'What our users have to say' or anything you want to."
			>
				<UMarquee pause-on-hover>
					<UPageCard
						v-for="(card, index) in reviewsCard"
						:key="index"
						v-bind="card"
						class="m-2"
					/>
				</UMarquee>
			</UPageSection>

			<UPageSection
				title="Videos"
				description="Videos not implemented yet"
				orientation="vertical"
			/>

			<UPageSection
				title="Quotes"
				description="Life is better with some quotes.	"
				orientation="vertical"
				icon="i-lucide-quote"
			>
				<UPageCard
					title="Weekly Quote"
					to="/weekly_quotes"
					variant="naked"
					:ui="{
						title: '',
					}"
				>
					<UPageCard v-bind="useNavigationStore().getWeeklyQuote" />
				</UPageCard>
				<UPageCard
					title="Weekly Philosphy"
					to="/weekly_philosophy"
					variant="naked"
				>
					<UPageCard v-bind="useNavigationStore().getWeeklyPhilosophy" />
				</UPageCard>
			</UPageSection>

			<UPageSection
				title="A little about myself"
				description="This can be reworded to look more professional as you requested. This is not the final text anyways. This is the 'About' or 'About Me' section."
			/>
		</UPage>
	</UContainer>
</template>

<script setup lang="ts">
import type { ButtonProps /* , UserProps */ } from "@nuxt/ui";

import cliffImage from "@/assets/images/cliff_sunset_with_beach.jpg";

// interface Testimonial {
// 	user: UserProps;
// 	quote: string;
// }

definePageMeta({
	title: "Home Page",
});

const heroLinks = ref<ButtonProps[]>([
	{
		label: "Services",
		to: "/services",
		icon: "i-lucide-sparkles",
		variant: "solid",
	},
	{
		label: "Donate",
		to: "/donations",
		icon: "",
		variant: "subtle",
		trailingIcon: "i-lucide-heart-handshake",
		color: "secondary",
		class: "animate__animated animate__tada",
	},
]);

const serviceCards = useNavigationStore().getServicesCardsForHomepage;

const reviewsCard = useNavigationStore().getUserTestimonialsAsCards;

// const testimonials = ref<Testimonial[]>([
// 	{
// 		user: {
// 			name: "Michael Chen",
// 			description: "",
// 		},
// 		quote: "Transformed my mindset from fixed to growth in just weeks.",
// 	},
// 	{
// 		user: {
// 			name: "David Thompson",
// 			description: "",
// 		},
// 		quote: "Finally achieved work-life balance after years of struggling.",
// 	},
// 	{
// 		user: {
// 			name: "James Wilson",
// 			description: "",
// 		},
// 		quote: "Went from unsure to unstoppable with the right guidance.",
// 	},
// 	{
// 		user: {
// 			name: "Sarah Johnson",
// 			description: "",
// 		},
// 		quote: "Alex helped me find clarity and purpose I never knew I had.",
// 	},
// ]);
</script>

<style scoped></style>
