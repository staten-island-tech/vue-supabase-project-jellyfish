<template>
  <div>
    
  </div>
</template>

<script setup>
 import {ref} from 'vue'
 import { useRouter } from 'vue-router'
 import ShowCard from '@/components/ShowCard.vue'
const router = useRouter()

  fetchApiData();
   const route = useRoute() 
    const show = ref(null)
    async function getShow(id){
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
        const data = await response.json()
        show.value = data
        console.log(data)
    }
    
    onBeforeMount(function(){
        getShow(route.params.id)
    })

    watch(
        () => route.params.id,
        function(id) {
            getShow(id)
        }
    )


</script>

<style scoped>

</style>
