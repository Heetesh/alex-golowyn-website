<template>
	<main class="">
		<div class="flex flex-col gap-2">
			<div>
				<p class="text-orange-400 flex justify-center">Image Positioning Not done!</p>
				<img class="" src="/home/heetesh/Code/alex-golowyn-website/webapp/src/assets/website_hero_image.jpeg"
					alt="Website Hero image" />
			</div>

			<!-- MUST HAVE on Home view:
			 	10 lines of introduction for the website
				1 weekly quote
				1 Weekly philosophy
				3 reviews on main page
			  -->

			<section>
				<div class="flex flex-col">
					<h1 class="text-center text-primary-500">Website name</h1>


					<Card pt:body="bg-primary-500 text-white">
						<template #content>
							<p class="text-start md:text-lg">
								Website introduction would go here. Website introduction would go
								here. Website introduction would go here. Website introduction would
								go here. Website introduction would go here. Website introduction
								would go here. Website introduction would go here. Website
								introduction would go here. Website introduction would go here.
								Website introduction would go here. Website introduction would go
								here. Website introduction would go here. Website introduction would
								go here. Website introduction would go here. Website introduction
								would go here.
							</p>
						</template>
					</Card>
				</div>
			</section>

			<p class="text-red-600">Fix positioning for quotes</p>
			<div class="flex flex-col lg:flex-row gap-2 lg:gap-4 items-stretch">
				<!-- Weekly Quote -->
				<div class="">
					<WeeklyCardItem text="The best preparation for tomorrow is doing your best today."
						author="Walter Elias Disney">
						Weekly Quote
					</WeeklyCardItem>
				</div>
				<!-- Weekly Philosophy -->
				<div class="">
					<WeeklyCardItem
						text="The man who has no tincture of philosophy goes through life imprisoned in the prejudices derived from common sense, from the habitual beliefs of his age or his nation, and from convictions which have grown up in his mind without the cooperation or consent of his deliberate reason.	"
						author="Bertrand Russell">
						Weekly Philosophy
					</WeeklyCardItem>
				</div>
			</div>

			<!-- 3 x Reviews -->
			<div>
				<p class="text-red-600">Client reviews:</p>
				<div class="flex gap-2 justify-evenly">
					<ReviewCard class="flex-1" name="John Doe"
						text="I recently started working with Empower Your Journey Life Coaching, and I couldn't be happier! Their website is easy to navigate, and I found all the information I needed quickly.

My coach was incredibly supportive and really took the time to understand my goals. I felt heard and motivated after each session. The tools and resources they provide are super helpful, too!

If you’re looking for a life coach who genuinely cares and can help you make positive changes, I highly recommend them! It’s been a great experience for me!" />
					<ReviewCard class="flex-1" name="Spencer Carpenter"
						text="I had an amazing experience with Transformative Life Coaching! Their website is straightforward and welcoming, making it easy to find what I was looking for.

From my very first session, my coach made me feel comfortable and understood. They helped me clarify my goals and provided practical strategies to achieve them. I loved how personalized the coaching was; it felt like they truly cared about my journey.

The follow-up materials and resources on their site are a fantastic bonus, offering additional support between sessions. I’ve already seen positive changes in my life, and I’m excited to keep moving forward!

If you’re considering life coaching, I highly recommend Transformative Life Coaching. It’s been a game-changer for me!"></ReviewCard>
					<ReviewCard class="flex-1" name="Didier Drogba"
						text="I had a great experience with Transformative Life Coaching! Their website is easy to use, and I found everything I needed quickly.

My coach was friendly and really listened to me. They helped me set clear goals and gave me useful tips to reach them. I’ve already noticed positive changes in my life!

I highly recommend Transformative Life Coaching if you’re looking for support and guidance. It’s been a wonderful journey!"></ReviewCard>
				</div>
			</div>
		</div>
	</main>
</template>

<script lang="ts">
import WeeklyCardItem from '@/components/WeeklyCardItem.vue'
// import Card from 'primevue/card'
// import { Button } from 'primevue';
import ReviewCard from '@/components/ReviewCard.vue';

export default {
	data() {
		return {}
	},

	components: {
		WeeklyCardItem,
		// Card,
		// Button,
		ReviewCard,
	},
}
</script>
