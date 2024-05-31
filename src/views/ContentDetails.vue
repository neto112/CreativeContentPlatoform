<template>
  <v-container>
    <!-- Verifica se content.thumbnail está definido antes de exibir -->
    <GamesById :propItems="itemsGames" />
  </v-container>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import games from '../data/games'
import GamesById from './Games/GamesById.vue'

const route = useRoute()

const itemsGames = ref({})

onMounted(async () => {
  const id = route.params.id
  itemsGames.value = games.find((game) => game.id === parseInt(id))
})
</script>

<style scoped>
/* Add your styles here */
</style>
