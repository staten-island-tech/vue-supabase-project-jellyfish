<template>
  <div>
    <!-- <MovieCard v-for="(movie, index) in movie" :key="movie.name" 
    :movie="movie" :id="index + 1" /> -->
  </div>
</template>

<script setup>
 import {ref, onMounted} from 'vue'
 import ShowCard from '@/components/ShowCard.vue'


  fetchApiData();
   const route = useRoute() 
    const show = ref(null)
    async function getShow(id){
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
        const data = await response.json()
        show.value = data
        console.log(data)
    }
    
    onBeforeMount(function(){
        getShow(route.params.id)
    })

    watch(
        () => route.params.id,
        function(id) {
            getShow(id)
        }
    )


</script>

<style scoped>

</style>
