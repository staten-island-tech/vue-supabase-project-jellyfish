<template>
    <div>

    </div>
</template>

<script setup>
  import {ref} from 'vue'
  let id = 0

const writeReview = ref('')
const reviews = ref([
  { id: id++, text: 'show is very good', post: true },
])

function writeReview() {
  reviews.value.push({ id: id++, text: writeReview.value, post: false })
  writeReview.value = ''
}

function removeReview(review) {
  reviews.value = reviews.value.filter((r) => r !== review)
}

<form action="submit" @submit.prevent="writeReview">
    

</script>

<style lang="scss" scoped>

</style>