<template>
<router-link :to='Path' class="card"><div class="container"></div>
<h2> {{ show.name }} </h2>
<h3> {{ show.rating }} </h3>
<h3> {{ show.summary }} </h3>
<button @click="reviewShow(show)"> Add a Review </button>
</router-link>
</template>

<script setup>
    defineProps({
        show:{
        type: Object,
        required: true
        },
    })
</script>

<style lang="scss" scoped>

</style>
