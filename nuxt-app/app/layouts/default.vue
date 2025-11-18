<template>
  <UApp>
    <NuxtRouteAnnouncer />

    <!-- Wraps a UHeader  -->
    <NavigationMenu />

    <UContainer>
      <UMain>
        <slot />
      </UMain>
    </UContainer>

    <UFooter>
      <template #left>
        <p class="text-muted text-sm">
          Alex Golowyn © {{ new Date().getFullYear() }}
        </p>
      </template>
    </UFooter>
  </UApp>
</template>

<script setup lang="ts">
const test = () => {
  console.log("hello");
  return { name: "test", value: 123 };
};
</script>

<style scoped></style>
