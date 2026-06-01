<template>
  <div>
    <div class="movie-grid">
      <MovieCard
        v-for="movie in movies"
        :key="movie.id || movie.name"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MovieCard from '@/components/MovieCard.vue'

const movies = ref([])

async function fetchApiData() {
  const apiUrl = 'https://api.tvmaze.com/shows'

  try {
    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    movies.value = data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(() => {
  fetchApiData()
})
</script>

<style scoped>
.movie-grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
</style>
