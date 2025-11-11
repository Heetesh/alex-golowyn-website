<template>
	<div class="flex justify-center">
		Copyright &copy; Alex Golowyn {{ currentYear }}
	</div>
</template>

<script lang="ts">
export default {
	data() {
		return {
			currentYear: "",
		};
	},

	mounted() {
		this.currentYear = new Date().getFullYear().toString();
	},
};
</script>

<style scoped></style>
