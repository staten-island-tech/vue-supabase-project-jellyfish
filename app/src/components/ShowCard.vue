<template>
<router-link :to="`/shows/${show.id}`" class="card">
    <img v-if="show.image"
    :src="show.image.medium"
    :alt="show.name"
    />

 
</router-link>
</template>

<script setup>
    defineProps({
        show: Object,
        required: true
    })
</script>

<style scoped>

.card {
  display: block;
  box-sizing: border-box;
  border: none;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  padding: 10px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.15);
}

.card img {
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
}

</style>
