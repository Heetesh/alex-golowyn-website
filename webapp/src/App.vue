<script lang="ts">
import { Button } from 'primevue'
import { InputText } from 'primevue'

export default {
	components: {
		Button,
		InputText,
	},
}
</script>

<template>
	<header>
		<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

		<div class="wrapper">
			<HelloWorld msg="You did it!" />

			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
			</nav>
		</div>

		<div>
			<Button>Test me</Button>
		</div>
	</header>

	<RouterView />
</template>

<style scoped></style>
