<template>
  <button @click="goHome">Home</button>
  
  <div v-if="show">
    
    <h1 class="title">{{ show.name }}</h1>
    
    <div class="info">
      <img v-if="show.image" :src="show.image.medium" />
      
      <div class="details">
        <p>Rating: {{ show.rating.average }}</p>
        <div v-html="show.summary"></div>
      </div>
    
    </div>
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
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

function goHome() {
  router.push('/shows')
}


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
.info {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  font-size: 20px;
}

.info img {
  width: 300px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.details {
  flex: 1;
}

.title {
  margin-bottom: 15px;
}


</style>
