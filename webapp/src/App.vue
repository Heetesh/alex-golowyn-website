<script lang="ts">


import NavigationBar from './components/MenuBar.vue'


export default {
	components: {
		NavigationBar,
	},
}
</script>

<template>
	<header>
		<!-- <div class="wrapper">
			<HelloWorld msg="You did it!" />
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
			</nav>
		</div>
		<div>
			<Button>Test me</Button>
			<DarkModeToggle />
		</div> -->

		<!-- <div class="flex">
			<DarkModeToggle></DarkModeToggle>

			<Button class="">Test</Button>

			<Button label="Test2" icon="pi pi-check" icon-pos="left" />
		</div> -->
		<NavigationBar></NavigationBar>

		<Button label="Test" />
		<Button>Test2</Button>


	</header>

	<RouterView />

	<footer>
		<!-- Copyrighted etc.... -->
	</footer>
</template>

<style scoped></style>
