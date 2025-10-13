<template>
    <div>
        <p class="text-blue-500">Hello world!</p>
        <Button class="bg-blue-500 hover:bg-blue-600 ripple">Test</Button>
    </div>
</template>

<script lang="ts">

import Button from '@/components/ui/button/Button.vue';

export default {
    components: {
        Button,
    },

    methods: {
        test() {
            alert("Button clicked")
        }
    }
}

</script>

<style scoped></style>