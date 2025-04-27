<script setup lang="ts">
defineProps<{
    header: string
    subHeader: string
}>()
</script>

<template>

    <h4 class="lh-1 main-header-section">{{ header }}</h4>
    <h2 class="lh-1 sub-header-section">{{ subHeader }}</h2>

</template>
