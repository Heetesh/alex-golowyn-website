<script lang="ts">
import Button from '@/volt/Button.vue'
import InputText from './volt/InputText.vue';


export default {
	components: {
		Button,
		InputText
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
			<InputText>Enter:</InputText>
		</div>
	</header>

	<RouterView />
</template>

<style scoped></style>
