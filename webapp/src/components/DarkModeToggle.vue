<template>
    <div>
        <Button @click="toggleDarkMode" :aria-label="isDark ? 'Swith to light mode' : 'Swith to dark mode'">
            <i :class="isDark ? 'pi pi-sun' : 'pi pi-moon'"></i>
            <span>{{ isDark ? 'Light' : 'Dark' }}</span>
        </Button>
    </div>
</template>

<script lang="ts">
import { Button } from 'primevue'
import { useUIStore } from '@/stores/ui_store'

export default {
    name: 'DarkModeToggle',

    components: {
        // eslint-disable-next-line vue/no-reserved-component-names
        Button,
    },


    computed: {
        isDark(): boolean {
            return useUIStore().darkMode
        },
    },

    methods: {
        toggleDarkMode(): void {
            useUIStore().toggleDarkMode()
        },
    },
}
</script>
