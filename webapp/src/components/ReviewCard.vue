<template>
    <div class="bg-primary-500 rounded">
        <Card pt:body="bg-primary-500 text-white rounded" class="bg-background-500">
            <template #content>
                <p class="text-text-950">{{ text }}</p>
            </template>

            <template #footer>
                -{{ name }}
            </template>
        </Card>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        text: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        }
    }
}
</script>

<style scoped></style>
