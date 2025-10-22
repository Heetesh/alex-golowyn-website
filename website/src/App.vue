<script lang="ts">
import NavigationMenu from './components/NavigationMenu.vue';

export default {
	components: {
		NavigationMenu
	},

	
}


</script>

<template>
	<header>
		<NavigationMenu class="flex justify-center items-center" />
	</header>

	<RouterView />
</template>

<style scoped></style>
