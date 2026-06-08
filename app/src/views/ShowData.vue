<template>
  <div v-if="show">
    <h1>{{ show.name }}</h1>
    <p><strong>Rating: </strong> {{ show.rating.average }}</p>
    <img v-if="show.image" :src="show.image.medium" />
    <div v-html="show.summary"></div>
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

</script>

<style scoped>

</style>
