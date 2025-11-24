<template>
	<UApp>
		<NuxtRouteAnnouncer />

		<!-- Wraps a UHeader  -->
		<NavigationMenu />

		<UMain>
			<UContainer>
				<slot />
			</UContainer>
		</UMain>

		<UFooter>
			<template #default>
				<p class="text-muted text-sm">
					Alex Golowyn © {{ new Date().getFullYear() }}
				</p>
			</template>
			<template #left>
				<p class="text-muted text-sm">
					Can add icon or logo here
				</p>
			</template>

			<template #right>
				<p class="text-muted text-sm">
					Can add icon or logo here
				</p>
			</template>
		</UFooter>
	</UApp>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
