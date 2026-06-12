<template>
  <div>
<h1> Welcome ! </h1>
<button @click="goToShowData"> Shows </button>
<button @click="yourReviews(reviews)"> Your Reviews </button>
  <div class="container">
      <ShowCard v-for="show in shows"
      :key="show.name"
      :show="show"/></div>
  <div class="container">
      <ReviewCard v-for="review in reviews"
      :key="review.name"
      :review="review"/> </div>
  <div class="container">
      <UserCard v-for="user in users"
      :key="user.name"
      :user="user"/></div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import { useRouter } from 'vue-router'
import ShowCard from '@/components/ShowCard.vue'
import ReviewCard from '@/components/ReviewCard.vue'
import UserCard from '@/components/UserCard.vue'




</script>

<style lang="scss" scoped>

</style>
