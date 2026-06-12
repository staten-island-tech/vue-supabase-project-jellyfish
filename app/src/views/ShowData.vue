<template>
  <div v-if="show">
    <h1>{{ show.name }}</h1>
    <p><strong>Rating: </strong> {{ show.rating.average }}</p>
    <img v-if="show.image" :src="show.image.medium" />
    <div v-html="show.summary"></div>
  </div>

  <!-- WriteReview -->

  <div>
    <form @submit.prevent="addReview">
      <input v-model="newReview" required placeholder="new review">
      <button> Add Review </button>
    </form>

    <li v-for="review in reviews" :key="review.id">
      {{ review.text }}
      <button @click="removeReview(review)"> Delete </button>
    </li>


    </div>

</template>

<script setup>
import { ref, onBeforeMount, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute() 
const show = ref(null)

async function getShow(id) {
    try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
        const data = await response.json()
        
        console.log(id)
        console.log(data)
        show.value = data
    } catch (err) {
        console.error(err)
    }
}

onBeforeMount(() => {
    getShow(route.params.id)
})

watch(
    () => route.params.id,
    (id) => {
        getShow(id)
    }
)

// WriteReview
  
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

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 40px;
}

.card { 
  align-items: center;
  border: 2px solid #000000;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
