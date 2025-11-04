<template>
    <div v-if="isDesktop" class="flex justify-center items-center">
        <NavigationMenu>
            <NavigationMenuList>

                <NavigationMenuItem v-for="items in navigationMenuItems" :key="items.route">

                    <RouterLink v-slot="{ isActive, href, navigate }" :to="items.route" custom>
                        <NavigationMenuLink :class="navTriggerClass" :active="isActive" :href @click="navigate">
                            {{ items.name }}
                        </NavigationMenuLink>
                    </RouterLink>

                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>

    </div>

    <div v-else class="flex justify-end items-start">

        <!-- TODO: div id="#app" is hidden and violates ARIA accessibility. Fix later -->
        <Drawer v-model:open="isDrawerOpen" direction="right">
            <DrawerTrigger as-child>
                <Button variant="ghost" size="icon" @click="openDrawer">
                    <MenuIcon />
                </Button>
            </DrawerTrigger>

            <!-- TODO: Research more into teleport and how it might fix ARIA hidden div id="#app" -->
            <!-- <Teleport to="#mobileDrawer">
            </Teleport> -->

            <DrawerContent>
                <div class="flex flex-col">
                    <DrawerHeader class="items-center ">
                        <DrawerTitle>Navigation Menu</DrawerTitle>
                        <DrawerDescription hidden>Select a navigation option.</DrawerDescription>

                    </DrawerHeader>

                    <div class="flex flex-col gap-1.5 p-4">
                        <div v-for="item in navigationMenuItems" :key="item.route">
                            <RouterLink v-slot="{ isActive, href, navigate }" :to="item.route" custom>
                                <Button class="w-full" :variant="isActive ? 'destructive' : 'default'"
                                    @click="handleNavigateClick(navigate)">{{
                                        item.name
                                    }}</Button>
                            </RouterLink>

                        </div>
                    </div>

                    <!-- <DrawerFooter>
                        <DrawerClose as-child>
                            <Button variant="default">Close</Button>
                        </DrawerClose>
                    </DrawerFooter> -->
                </div>
            </DrawerContent>

        </Drawer>
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

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import { Menu as MenuIcon } from "lucide-vue-next"

import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'

import Button from './ui/button/Button.vue';


// import type { NavigationFunction } from 'vue-router';

interface nagivationMenuItem {
    route: string,
    name: string,
}


export default {
    data() {
        return {
            navTriggerClass: navigationMenuTriggerStyle(),
            isDesktop: useMediaQuery("(min-width: 825px)"),
            isDrawerOpen: false,
            navigationMenuItems: [
                { name: 'Home', route: "/" },
                { name: 'Services', route: '/services' },
                { name: 'Weekly Quotes', route: '/weekly_quotes' },
                { name: 'Weekly Philosophy', route: '/weekly_philosophy' },
                { name: 'Videos', route: '/videos' },
                { name: 'Donations', route: '/donations' },
                { name: 'Contact', route: '/contact' },
                { name: 'About', route: '/about' },
            ] as nagivationMenuItem[],
        }
    },

    components: {
        // navigation-menu
        NavigationMenu,
        NavigationMenuContent,
        NavigationMenuIndicator,
        NavigationMenuItem,
        NavigationMenuLink,
        NavigationMenuList,
        NavigationMenuTrigger,
        NavigationMenuViewport,

        // drawer
        Drawer,
        DrawerClose,
        DrawerContent,
        DrawerDescription,
        DrawerFooter,
        DrawerHeader,
        DrawerTitle,
        DrawerTrigger,

        // lucide icons
        MenuIcon,

        Button,

    },

    methods: {
        navigateTo(route: string): void {
            this.$router.push(route)
        },

        openDrawer(): void {
            if (!this.isDrawerOpen) {
                this.isDrawerOpen = true
            }
        },

        closeDrawer(): void {
            if (this.isDrawerOpen) {
                this.isDrawerOpen = false;
            }
        },

        handleNavigateClick(navigate: () => void): void {
            this.isDrawerOpen = false

            navigate()

        }
    }
}
</script>

<style scoped></style>