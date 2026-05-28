<template>
    <div>
<h2> {{ user.name }} </h2>
<h2> {{ user.password }} </h2>
<h2> {{ user.timecreated }} </h2>

    </div>
</template>

<script setup>
     defineProps({
        user:{
        type: Object,
        required: true
        },
    })
</script>

<style scoped>

</style>