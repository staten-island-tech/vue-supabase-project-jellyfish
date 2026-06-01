<template>
<router-link :to='Path' class="card"><div class="container"></div>
<h2> {{ movie.name }} </h2>
<h3> {{ movie.rating }} </h3>
<h3> {{ movie.summary }} </h3>
<button @click="reviewMovie(movie)"> Add a Review </button>
</router-link>
</template>

<script setup>
    defineProps({
        movie:{
        type: Object,
        required: true
        },
    })
</script>

<style lang="scss" scoped>

</style>
