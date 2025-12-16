<template>
	<div>
		<div class="flex flex-col gap-2 mb-2">
			<!-- <p class="">
				Select a video
			</p> -->
			<UAlert
				title="Select a video"
				variant="subtle"
				class="p-2"
			/>
			<USelect
				v-model="selectedModalValue"
				value-key="value"
				:items="youtubeSelectIdItems"
				highlight
				variant="subtle"
				:ui="{
					trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200',
				}"
			/>
		</div>

		<div class="relative w-full aspect-video">
			<iframe
				class="absolute top-0 left-0 w-full h-full rounded"
				:src="`https://www.youtube.com/embed/${selectedModalValue}`"
				title="Youtube Video"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
// KISS on youtube embed.
// Have a select that toggle the youtube video id
// On toggle change, change the youtube id dynamically

interface YoutubeVideoItem {
	label: string;
	value: string;
}

const youtubeSelectIdItems = ref<YoutubeVideoItem[]>([
	{
		label: "Spitfire Mk1 to Mk24 | How Spitfires kept getting better",
		value: "q6i5eMM11G4",
	},
	{
		label: "Interstellar Main Theme - Hans Zimmer",
		value: "kpz8lpoLvrA",
	},
	{
		label: "Me at the zoo",
		value: "jNQXAC9IVRw",
	},
	{
		label: "Black Holes Explained - From Birth to Death",
		value: "e-P5IFTqB98",
	},
	{
		label: "British Naval Beast: The Hawker Sea Fury",
		value: "7N44qQoIQds",
	},
	{
		label: "Rain Man - Full movie",
		value: "U-jTwOXkvS0",
	},
	{
		label: "Cats & Dogs",
		value: "n1XWqrZxk8M",
	},
]);

const selectedModalValue = ref(youtubeSelectIdItems.value[0]?.value);
</script>

<style scoped>

</style>
