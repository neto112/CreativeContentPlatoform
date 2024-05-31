<template>
  <v-container>
    <v-img :src="content.thumbnail" height="400px"></v-img>
    <v-card-title>{{ content.title }}</v-card-title>
    <v-card-subtitle>{{ content.genre }}</v-card-subtitle>
    <v-card-text>{{ content.short_description }}</v-card-text>
    <v-card-text>Platform: {{ content.platform }}</v-card-text>
    <v-card-text>Publisher: {{ content.publisher }}</v-card-text>
    <v-card-text>Developer: {{ content.developer }}</v-card-text>
    <v-card-text>Release Date: {{ content.release_date }}</v-card-text>
    <v-rating v-model="content.rating" background-color="yellow lighten-3"></v-rating>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import games from '../data/games'

const route = useRoute()
const content = ref({})

onMounted(async () => {
  const id = route.params.id
  content.value = games.find((game) => game.id === parseInt(id))
})
</script>

<style scoped>
/* Add your styles here */
</style>
