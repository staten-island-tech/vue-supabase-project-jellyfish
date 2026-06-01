<template>
  <div class="movie-card">
    <h2>{{ movie.name }}</h2>
    <p class="movie-meta">
      <span>Rating: {{ movie.rating?.average ?? 'N/A' }}</span>
      <span v-if="movie.genres?.length">Genres: {{ movie.genres.join(', ') }}</span>
    </p>
    <div v-if="movie.summary" class="movie-summary" v-html="movie.summary"></div>
    <p v-else>No summary available.</p>
    <button @click="reviewMovie(movie)">Add a Review</button>
  </div>
</template>

<script setup>
const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
})

function reviewMovie(movie) {
  console.log('Review movie:', movie)
}
</script>

<style lang="scss" scoped>
.movie-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 16px;
}
.movie-meta {
  display: flex;
  gap: 12px;
  margin: 8px 0;
  font-size: 0.95rem;
  color: #555;
}
.movie-summary {
  margin: 12px 0;
}
button {
  margin-top: 12px;
}
</style>
