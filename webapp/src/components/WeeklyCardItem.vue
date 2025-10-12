<template>
	<Card class="" pt:body="bg-primary-500 text-primary-950 rounded" pt:content="" pt:footer="">
		<template #title>
			<p class="text-xl md:text-2xl ">
				<slot></slot>
			</p>
		</template>

		<template #content>
			<p class="text-2xl md:text-3xl italic font-semibold">{{ text }}</p>
		</template>

		<template v-if="author" #footer>
			<p class="text-primary-900 md:text-lg">- {{ author }}</p>
		</template>
	</Card>
</template>

<script lang="ts">
export default {
	data() {
		return {}
	},

	props: {
		text: {
			type: String,
			required: true,
		},

		author: {
			type: String,
			required: false,
			default: '',
		},
	},
}
</script>

<style scoped></style>
