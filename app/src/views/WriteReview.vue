<template>
    <div>
    <form @submit.prevent="addReview">
      <input v-model="newReview" required placeholder="new review">
      <button> Add Review </button>
    </form>
  
    <li v-for="review in reviews" :key="review.id">
      <button @click="removeReview(review)"> Delete </button>
    </li>


    </div>
</template>

<script setup>
  import { ref } from 'vue'
  
  let id = 0


  const newReview = ref('')
  const reviews = ref([
    { id: id++, text: 'show is very good' },
  ])

  function addReview() {
    reviews.value.push({ id: id++, text: newReview.value })
    newReview.value = ''
  }

  function removeReview(review) {
    reviews.value = reviews.value.filter((r) => r !== review)
  }

</script>

<style lang="scss" scoped>

</style>