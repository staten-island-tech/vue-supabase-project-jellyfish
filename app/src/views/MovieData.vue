<template>
  <div>
    <!-- <MovieCard v-for="(movie, index) in movie" :key="movie.name" 
    :movie="movie" :id="index + 1" /> -->
  </div>
</template>

<script setup>
 import {ref, onMounted} from 'vue'
 import MovieCard from '@/components/MovieCard.vue'
 const movie = ref([])
/*  async function getMovie(){
  try{
    const response = await fetch('https://api.tvmaze.com/shows')
    const data = await response.json()
    movie.value = data.results
  } catch(error) {
    console.log(error)
  }
 }
 onMounted(()=> {
  getMovie()
 }) */

async function fetchApiData() {
  const apiUrl = 'https://api.tvmaze.com/shows';

  try {
    
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();

    console.log(data);
    return data;

  } catch (error) {
    
    console.error('Error fetching data:', error);
  }
}

fetchApiData();

</script>

<style scoped>

</style>
