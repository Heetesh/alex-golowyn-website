<template>
	<UPage>
		<UPageHero
			title="Welcome to the website message"
			description="Your introduction would go over here Sash. I will write some boiler text to have an idea of the introduction. This can be changed later on to a different layout if you want. Writing some more boiler text and we keep going. We've reached about halfway of the introduction. Maybe some more. I have a page hero or a call to action that hopefully will entice the user to click on the services and/or donate. These would be the main features of the website. We have probably reached close to or near the introduction text length. Let us keep going for good measures. Alright I will stop typing now, haha."
			headline=""
			:links="heroLinks"
			:orientation="useIsDesktop().value ? 'vertical' : 'vertical'"
			reverse
		/>

		<UPageSection
			title="Our Services"
			description="Check out what we have to offer."
			orientation="vertical"
		>
			<UPageGrid
				class="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
			>
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
			<UMarquee
				pause-on-hover
				:overlay="useIsDesktop().value ? true : false"
			>
				<UPageCard
					v-for="(card, index) in reviewsCard"
					:key="index"
					v-bind="card"
					class="my-2 w-96 h-40 overflow-hidden border-primary border"
				>
					<template #title>
						<p class="line-clamp-4">
							{{ card.title }}
						</p>
					</template>
				</UPageCard>
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
				<UPageCard
					title="The pen is mightier than the sword."
					description="Edward Bulwer-Lytton"
					highlight
					to="/weekly_quotes"
					variant="subtle"
					spotlight
					spotlight-color="primary"
					:ui="{ root: 'shadow-xl' }"
				/>
			</UPageCard>
			<UPageCard
				title="Weekly Philosphy"
				to="/weekly_philosophy"
				variant="naked"
				:ui="{
					title: '',
				}"
			>
				<UPageCard
					title="Success is not final, failure is not fatal; it is the courage to continue that counts."
					description="Winston Churchill"
					highlight
					to="/weekly_philosophy"
					variant="subtle"
					spotlight
					spotlight-color="primary"
					:ui="{
						root: 'shadow-xl',
					}"
				/>
			</UPageCard>
		</UPageSection>

		<UPageSection
			title="About me"
			headline=""
			description="This can be reworded to look more professional as you requested. This is not the final text anyways. This is the 'About' or 'About Me' section."
		/>
	</UPage>
</template>

<script setup lang="ts">
import type { ButtonProps, PageCardProps } from "@nuxt/ui";

useHead({
	title: "Alex Golowyn - Home Page",
	meta: [],
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
		color: "primary",
		class: "animate__animated animate__tada",
	},
]);

const serviceCards: PageCardProps[] = [
	{
		title: "Alpha Service",
		description:
					"Alpha Service is the best service for x action. This text will be update later on.",
		spotlight: true,
		spotlightColor: "primary",
		highlight: true,
		to: "/services/beta",
		variant: "subtle",
		ui: {
			root: "shadow-lg",
		},
	},
	{
		title: "Beta Service",
		description:
					"Alpha Service is the best service for x action. This text will be update later on.",
		spotlight: true,
		spotlightColor: "primary",
		highlight: true,
		to: "/services/beta",
		variant: "subtle",
		ui: {
			root: "shadow-lg",
		},
	},
	{
		title: "Charlie Service",
		description:
					"Alpha Service is the best service for x action. This text will be update later on.",
		spotlight: true,
		spotlightColor: "primary",
		highlight: true,
		to: "/services/beta",
		variant: "subtle",
		ui: {
			root: "shadow-lg",
		},
	},
	{
		title: "Delta Service",
		description:
					"Alpha Service is the best service for x action. This text will be update later on.",
		spotlight: true,
		spotlightColor: "primary",
		highlight: true,
		to: "/services/beta",
		variant: "subtle",
		ui: {
			root: "shadow-lg",
		},
	},
	{
		title: "Alpha Service",
		description:
					"Alpha Service is the best service for x action. This text will be update later on.",
		spotlight: true,
		spotlightColor: "primary",
		highlight: true,
		to: "/services/beta",
		variant: "subtle",
		ui: {
			root: "shadow-lg",
		},
	},
	{
		title: "Beta Service",
		description:
					"Alpha Service is the best service for x action. This text will be update later on.",
		spotlight: true,
		spotlightColor: "primary",
		highlight: true,
		to: "/services/beta",
		variant: "subtle",
		ui: {
			root: "shadow-lg",
		},
	},
];

const reviewsCard: PageCardProps[] = [
	{
		title: "Alex helped me find clarity and purpose I never knew I had.",
		description: "Sarah Johnson",
		// spotlight: true,
		// spotlightColor: "primary",
		// highlight: true,
		to: "/weekly_philosophy",
		variant: "outline",
		spotlight: true,
		spotlightColor: "primary",
		ui: {
			root: "shadow-xl",
		},
	},
	{
		title: "Went from unsure to unstoppable with the right guidance.",
		description: "James Wilson",
		// spotlight: true,
		// spotlightColor: "primary",
		// highlight: true,
		to: "/weekly_philosophy",
		variant: "outline",
		spotlight: true,
		spotlightColor: "primary",
		ui: {
			root: "shadow-xl",
		},
	},
	{
		title: "Transformed my mindset from fixed to growth in just weeks.",
		description: "Michael Chen",
		// spotlight: true,
		// spotlightColor: "primary",
		// highlight: true,
		to: "/weekly_philosophy",
		variant: "subtle",
		spotlight: true,
		spotlightColor: "primary",
		ui: {
			root: "shadow-xl",
		},
	},
];
</script>

<style scoped></style>
