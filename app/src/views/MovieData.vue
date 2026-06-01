<template>
  <div>
    <!-- <MovieCard v-for="(movie, index) in movie" :key="movie.name" 
    :movie="movie" :id="index + 1" /> -->
  </div>
</template>

<script setup>
 import {ref, onMounted} from 'vue'
 import MovieCard from '@/components/MovieCard.vue'
<<<<<<< HEAD
/*  async function getMovie(){
=======
 const movie = ref([])
 async function getMovie(){
>>>>>>> 376e88dde60ea920c7be14eb5acf580d81a63ab5
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
 })

<<<<<<< HEAD
// async function fetchApiData() {
//   const apiUrl = 'https://api.tvmaze.com/shows';
=======
/* async function fetchApiData() {
  const apiUrl = 'https://api.tvmaze.com/shows';
>>>>>>> 376e88dde60ea920c7be14eb5acf580d81a63ab5

//   try {
    
//     const response = await fetch(apiUrl);

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
    
//     const data = await response.json();

//     console.log(data);
//     return data;

//   } catch (error) {
    
//     console.error('Error fetching data:', error);
//   }
// }

// fetchApiData();
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

<<<<<<< HEAD
=======
  } catch (error) {
    
    console.error('Error fetching data:', error);
  }
}

fetchApiData(); */
>>>>>>> 376e88dde60ea920c7be14eb5acf580d81a63ab5

</script>

<style scoped>

</style>
