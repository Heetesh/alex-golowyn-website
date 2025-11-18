<template>
	<div/>
	
</template>

<script setup lang="ts">
import type { PageCardProps } from "@nuxt/ui";

const testCards: PageCardProps[] = useNavigationStore().getServicesCardsForHomepage;
</script>

<style scoped></style>
