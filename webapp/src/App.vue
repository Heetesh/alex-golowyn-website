<script lang="ts">
import { Button } from 'primevue'
// import { InputText } from 'primevue'

import DarkModeToggle from '@/components/DarkModeToggle.vue'
import { useUIStore } from '@/stores/ui_store'

export default {
	components: {
		// eslint-disable-next-line vue/no-reserved-component-names
		Button,
		// InputText,
		DarkModeToggle,
	},

	mounted() {
		const uiStore = useUIStore()
		uiStore.applyDarkClass()
	}

}
</script>

<template>
	<header class="px-[5px]">
		<div class="wrapper">
			<HelloWorld msg="You did it!" />
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
			</nav>
		</div>
		<div>
			<Button>Test me</Button>
			<DarkModeToggle />
		</div>
	</header>

	<body>
		<RouterView />
	</body>
</template>

<style scoped></style>
