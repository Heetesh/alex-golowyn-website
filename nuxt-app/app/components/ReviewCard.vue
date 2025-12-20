<template>
	<UPageCard
		variant="subtle"
		highlight
		spotlight
		v-bind="$attrs"
	/>
</template>

<script setup lang="ts">
// Disable attribute inheritance on root element
// so v-bind="$attrs" has full control
defineOptions({
	inheritAttrs: false,
});
</script>
