<script lang="ts">
import NavigationBar from './components/MenuBar.vue'
import AudioPlayer from './components/AudioPlayer.vue';

export default {
	components: {
		NavigationBar,
		AudioPlayer,
	},
}
</script>

<template>
	<header>

		<AudioPlayer />
		<NavigationBar></NavigationBar>
	</header>

	<RouterView />

	<footer>
		<!-- Copyrighted etc.... -->
	</footer>
</template>

<style scoped></style>
