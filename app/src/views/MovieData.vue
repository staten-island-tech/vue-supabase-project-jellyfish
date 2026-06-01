<template>
  <div>
    <!-- <MovieCard v-for="(movie, index) in movie" :key="movie.name" 
    :movie="movie" :id="index + 1" /> -->
  </div>
</template>

<script setup>
 import {ref, onMounted} from 'vue'
 import MovieCard from '@/components/MovieCard.vue'


  fetchApiData();
   const route = useRoute() 
    const movie = ref(null)
    async function getMovie(id){
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
        const data = await response.json()
        movie.value = data
        console.log(data)
    }
    
    onBeforeMount(function(){
        getMovie(route.params.id)
    })

    watch(
        () => route.params.id,
        function(id) {
            getAnimal(id)
        }
    )


</script>

<style scoped>

</style>
