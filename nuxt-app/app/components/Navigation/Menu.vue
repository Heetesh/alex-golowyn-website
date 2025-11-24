<template>
	<UHeader
		title=""
		to="/"
		mode="drawer"
		:menu="{ direction: 'right', ...{} }"
	>
		<UNavigationMenu
			:items="navigationMenuItems"
			content-orientation="vertical"
			:highlight="true"
			color="primary"
		/>
		<!-- template body passes passes the UNavigationMenu to the drawer -->
		<template #body>
			<UNavigationMenu
				:items="navigationMenuItems"
				orientation="vertical"
			/>
		</template>
	</UHeader>
</template>

<script setup lang="ts">
const navigationMenuItems = useNavigationStore().getNavigationItems;
</script>

<style scoped></style>
