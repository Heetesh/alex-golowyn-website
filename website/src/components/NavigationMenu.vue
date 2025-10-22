<template>
    <div class="">
        <NavigationMenu>
            <NavigationMenuList>

                <!-- Home -->
                <NavigationMenuItem>
                    <RouterLink v-slot="{ isActive, href, navigate }" to="/" custom>
                        <NavigationMenuLink :class="navTriggerClass" :active="isActive" :href @click="navigate">
                            Home
                        </NavigationMenuLink>
                    </RouterLink>
                </NavigationMenuItem>

                <!-- Services -->
                <NavigationMenuItem>
                    <RouterLink v-slot="{ isActive, href, navigate }" to="/services" custom>
                        <NavigationMenuLink :class="navTriggerClass" :active="isActive" :href @click="navigate">
                            Services
                        </NavigationMenuLink>
                    </RouterLink>
                </NavigationMenuItem>

                <!-- Weekly Quotes -->
                <NavigationMenuItem>
                    <RouterLink v-slot="{ isActive, href, navigate }" to="/weekly_quotes" custom>
                        <NavigationMenuLink :class="navTriggerClass" :active="isActive" :href @click="navigate">
                            Weekly Quotes
                        </NavigationMenuLink>
                    </RouterLink>
                </NavigationMenuItem>

                <!-- Weekly Philosophy -->
                <NavigationMenuItem>
                    <RouterLink v-slot="{ isActive, href, navigate }" to="/weekly_philosophy" custom>
                        <NavigationMenuLink :class="navTriggerClass" :active="isActive" :href @click="navigate">
                            Weekly Philosophy
                        </NavigationMenuLink>
                    </RouterLink>
                </NavigationMenuItem>

                <!-- Videos -->
                <NavigationMenuItem>
                    <RouterLink v-slot="{ isActive, href, navigate }" to="/videos" custom>
                        <NavigationMenuLink :class="navTriggerClass" :active="isActive" :href @click="navigate">
                            Videos
                        </NavigationMenuLink>
                    </RouterLink>
                </NavigationMenuItem>

                <!-- Donations -->
                <NavigationMenuItem>
                    <RouterLink v-slot="{ isActive, href, navigate }" to="/donations" custom>
                        <NavigationMenuLink :class="navTriggerClass" :active="isActive" :href @click="navigate">
                            Donations
                        </NavigationMenuLink>
                    </RouterLink>
                </NavigationMenuItem>

                <!-- Contact -->
                <NavigationMenuItem>
                    <RouterLink v-slot="{ isActive, href, navigate }" to="/contact" custom>
                        <NavigationMenuLink :class="navTriggerClass" :active="isActive" :href @click="navigate">
                            Contact
                        </NavigationMenuLink>
                    </RouterLink>
                </NavigationMenuItem>

                <!-- About -->
                <NavigationMenuItem>
                    <RouterLink v-slot="{ isActive, href, navigate }" to="/about" custom>
                        <NavigationMenuLink :class="navTriggerClass" :active="isActive" :href @click="navigate">
                            About
                        </NavigationMenuLink>
                    </RouterLink>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    </div>
</template>

<script lang="ts">

import { useMediaQuery } from '@vueuse/core';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from '@/components/ui/navigation-menu'

import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'


export default {
    data() {
        return {
            navTriggerClass: navigationMenuTriggerStyle(),
            isDesktop: useMediaQuery("(min-width: 768px)")
        }
    },

    components: {
        NavigationMenu,
        NavigationMenuContent,
        NavigationMenuIndicator,
        NavigationMenuItem,
        NavigationMenuLink,
        NavigationMenuList,
        NavigationMenuTrigger,
        NavigationMenuViewport,
    },

    methods: {
        navigateTo(route: string): void {
            this.$router.push(route)
        }
    }
}
</script>

<style scoped></style>