<template>
    <div>
<h2>  </h2>
<h3> {{ review.timeposted }}</h3>
<h3> {{ user.name }}</h3>
<h3> {{ movie.name }}</h3>
<h3> {{ review.text }}</h3>
<h3> {{ review.likes }}</h3>
    </div>
</template>

<script setup>
    defineProps({
        review:{
        type:Object,
        required:true
        },
    })
   
</script>

<style lang="scss" scoped>

</style>