<template>
	<main>

		<!-- <div class="flex flex-col bg-amber-300">
			<p>Intro section</p>
			<p>1x Weekly Quote</p>
			<p>1x Weekly Philosophy</p>
			<p>3x Reviews</p>
		</div> -->

		<div class="m-2 flex flex-col gap-4">

			<div class="h-60 w-full  border-red-500 border-4 text-center">Image goes here</div>

			<div>
				<Card>
					<CardContent class="text-center sm:text-start">
						This is an introduction text. Alex's website introduction will go
						over
						here. I am
						writing this so make
						sense of space to be occupied of the element. Alex will write a proper introduction over here.
						Again,
						just writing some nonsense to mimic the length of an actual introduction paragraph.
					</CardContent>
				</Card>
			</div>

			<!-- Quotes -->
			<div class="flex flex-col sm:flex-row gap-4">
				<Card class="flex-1">
					<CardHeader>
						<CardTitle class="text-lg font-medium">Weekly Quote</CardTitle>
						<CardDescription hidden></CardDescription>
					</CardHeader>

					<CardContent class="text-2xl font-semibold">
						The pen is mightier than the sword.
					</CardContent>

					<CardFooter class="italic font-medium text-sm">
						Edward Bulwer-Lytton
					</CardFooter>
				</Card>

				<Card class="flex-1">
					<CardHeader>
						<CardTitle class="text-lg font-medium">Weekly Philosophy</CardTitle>
						<CardDescription hidden></CardDescription>
					</CardHeader>

					<CardContent class="text-2xl font-semibold">
						Success is not final, failure is not fatal; it is the courage to continue that counts.
					</CardContent>

					<CardFooter class="italic font-medium text-sm">
						Winston Churchill
					</CardFooter>
				</Card>
			</div>

			<!-- Reviews -->
			<div>
				3x Reviews here
			</div>

		</div>
	</main>
</template>

<script lang="ts">


import HeroImage from '@/assets/cliff_sunset_with_beach.jpg'

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'


export default {
	components: {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle,


	},

	data() {
		return {
			heroImage: HeroImage,

		}
	},

	methods: {

	},
}
</script>

<style scoped></style>
