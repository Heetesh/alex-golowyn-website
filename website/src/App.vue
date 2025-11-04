<script lang="ts">
import NavigationMenu from './components/NavigationMenu.vue';

export default {
	components: {
		NavigationMenu
	},


}


</script>

<template>
	<NavigationMenu />

	<RouterView />
</template>

<style scoped></style>
