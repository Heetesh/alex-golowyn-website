<template>
    <div v-if="isDesktop">
        <UNavigationMenu :items="navigationItems"></UNavigationMenu>
    </div>

    <div v-else>
        <p>Implement nav for mobile</p>
    </div>
</template>

<script lang="ts">

import type { NavigationMenuItem } from '@nuxt/ui';

export default {
    data() {
        return {
            navigationItems: [
                {
                    label: "Home",
                    icon: "",
                    to: "/",
                },
                {
                    label: "Services",
                    icon: "",
                    to: "/services",
                },
                {
                    label: "Weekly Quotes",
                    icon: "",
                    to: "/weekly_quotes",
                },
                {
                    label: "Weekly Philosophy",
                    icon: "",
                    to: "/weekly_philosophy",
                },
                {
                    label: "Videos",
                    icon: "",
                    to: "/videos",
                },
                {
                    label: "Donations",
                    icon: "",
                    to: "/donations",
                },
                {
                    label: "Contact",
                    icon: "",
                    to: "/contact",
                },
                {
                    label: "About",
                    icon: "",
                    to: "/about",
                },
            ] as NavigationMenuItem[],
            isDesktop: useMediaQuery("(min-width: 825px)"),
        }
    }
}
</script>

<style scoped></style>