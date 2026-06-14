<template>
    <div class="page">
        <h1 class="title">Shows</h1>
        <input v-model="search" required placeholder="Search.." class="searchbar">
        <div class="shows">
            <ShowCard v-for="show in filteredShows" 
            :key="show.id"
            :show="show"
            />
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue'
import ShowCard from '@/components/ShowCard.vue';

const shows = ref ([])
const search = ref('')

async function getShows() {
    const response = await fetch('https://api.tvmaze.com/shows')
    shows.value = await response.json()
}

onMounted(() => {
    getShows()
})

const filteredShows = computed(() => {
    return shows.value.filter(show => 
        show.name.toLowerCase().includes(search.value.toLowerCase())
    )
})


</script>
<style scoped>
.shows {
    display: grid;
    grid-template-columns: repeat(auto-fill, 160px);
    justify-content: center;
    gap: 18px;
    padding: 20px;

}

.title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: hsl(0, 0%, 0%);
  margin: 30px 0;
  text-align: center;
  font-size: 40px;
}

.search {
    display: block;
    
}

</style>