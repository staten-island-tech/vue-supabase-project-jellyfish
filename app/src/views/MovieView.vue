<template>
  <div>
    <MovieCard v-for="() in movie" :key="movie.name" 
    :movie="movie" :id="index + 1" />
  </div>
</template>

<script setup>
 import {ref, onMounted} from 'vue'
 import MovieCard from '@/components/MovieCard.vue'
 const movie = ref([])
 async function getMovie(){
  try{
    const response = await fetch(                 )
    const data = await response.json()
    movie.value = data.results
  }
  catch(error) {
    console.log(error)
  }
 }
 onMounted(()=> {
  getMovie()
 })
</script>

<style scoped>

</style>