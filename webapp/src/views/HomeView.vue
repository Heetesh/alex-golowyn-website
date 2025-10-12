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
					<h1 class="text-center">Website name</h1>

					<Card pt:body="bg-primary-500 text-primary-950 rounded">
						<template #content>
							<p class="text-start md:text-lg bg-primary-500">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum
								autem commodi, voluptate alias repellat perferendis quaerat neque. Autem
								sequi placeat quisquam eos repellat qui ut dolore molestiae quod sint!
								Officia hic exercitationem officiis, numquam maiores consectetur iste, atque
								est in aliquid rem, nesciunt distinctio reprehenderit! Iste vitae autem
								illum, laborum voluptatem omnis nemo est minima provident. Itaque, suscipit
								similique? Expedita non dolor vel numquam. Aliquid illum eveniet odio earum
								expedita suscipit, est omnis vero ad corporis quidem, mollitia dolore
								accusantium! Cum asperiores accusamus unde mollitia similique sunt dolorem
								maiores. Hic tenetur ab fugiat deserunt dignissimos ipsa adipisci. Earum
								temporibus architecto beatae, totam at vel debitis modi dignissimos minima
								rerum, assumenda sunt, quidem mollitia quam eaque enim odit ipsam deleniti.
								Praesentium dolorum officiis neque temporibus nesciunt sapiente quaerat,
								labore ipsam unde velit minima voluptatum doloribus totam eum, quibusdam
								consectetur ipsum iste repellat, reiciendis eligendi. Dolorem et earum
								tempore rem nisi!s
							</p>
						</template>

					</Card>
				</div>
			</section>

			<!-- Weekly Quote -->
			<div>
				<WeeklyQuote text="The best preparation for tomorrow is doing your best today."
					author="Walter Elias Disney">Weekly
					Quote</WeeklyQuote>
			</div>

			<!-- Weekly Philosophy -->
			<div>
				<WeeklyQuote
					text="The man who has no tincture of philosophy goes through life imprisoned in the prejudices derived from common sense, from the habitual beliefs of his age or his nation, and from convictions which have grown up in his mind without the cooperation or consent of his deliberate reason.	"
					author="Bertrand Russell">Weekly Philosophy</WeeklyQuote>
			</div>

			<!-- 3 x Reviews -->
			<div>
				<p>Reviews</p>
				<p>Reviews</p>
				<p>Reviews</p>
			</div>
		</div>
	</main>
</template>

<script lang="ts">
import WeeklyQuote from '@/components/WeeklyCardItem.vue'
import Card from 'primevue/card';

// import WeeklyQuote from '@/components/WeeklyQuote.vue';

export default {
	data() {
		return {}
	},

	components: {
		WeeklyQuote,
		Card
	},
}
</script>
