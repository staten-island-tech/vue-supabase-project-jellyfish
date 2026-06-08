<template>
    <div>
    <form @submit.prevent="writeReview">
      <input v-model="writeReview" required placeholder="new review">
      <button> Add Review </button>
    </form>
  
    <ul>
      <li v-for="review in reviews" :key="review.id">
        <button @click="removeReview(review)"> Delete </button>
      </li>
    </ul>

    </div>
</template>

<script setup>
  import { ref } from 'vue'
  let id = 0


const reviewText = ref('')
const reviews = ref([
  { id: id++, text: 'show is very good' },
])

function addReview() {
  reviews.value.push({ id: id++, text: reviewText.value })
  reviewText.value = ''
}

function removeReview(review) {
  reviews.value = reviews.value.filter(r => r !== review)
}

</script>

<style lang="scss" scoped>

</style>