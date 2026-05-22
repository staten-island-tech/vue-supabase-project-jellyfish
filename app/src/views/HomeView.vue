<template>
  <div>
<h1> Welcome {{ user.name }}! </h1>
<button @click="goToMovies(movie)"> Movies </button>
<button @click="yourReviews(reviews)"> Your Reviews </button>
  <div class="container">
      <MovieCard v-for="movie in movies"
      :key="movie.name"
      :movie="movie"/></div>
  <div class="container">
      <ReviewCard v-for="review in reviews"
      :key="review.name"
      :review="review"/> </div>

  </div>
</template>

<script setup>
import {ref} from 'vue'
import MovieCard from '@/components/MovieCard.vue'
import ReviewCard from '@/components/ReviewCard.vue'

//api for movies


</script>

<style lang="scss" scoped>

</style>
