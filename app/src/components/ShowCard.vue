<template>
<router-link :to="`/shows/${show.id}`" class="card">
</router-link>

</template>

<script setup>
    defineProps({
        show: Object
    })
</script>

<style lang="scss" scoped>

</style>
