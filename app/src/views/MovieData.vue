<template>
    <div>
<h2> Movie List </h2>
    </div>
</template>

<script setup>
    import {onBeforeMount, ref, watch} from 'vue'
    import {useRoute} from 'vue-router'
    const route = useRoute() 
    const movie = ref(null)
    async function getMovie(id){
        const response = await fetch()
        const data = response.json()
        movie.value = data
    }
    
    onBeforeMount(function(){
        getMovie(route.params.id)
     })
     watch(
        () => route.params.id,
        function(id) {
            getMovie(id)
        }
     )

</script>

<style scoped>

</style>