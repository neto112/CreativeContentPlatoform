<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="6" lg="4" xl="3" v-for="game in games" :key="game.id">
        <v-card @click="goToDetails(game.id)">
          <v-img :src="game.thumbnail" height="200px"></v-img>
          <v-card-title>{{ game.title }}</v-card-title>
          <v-card-subtitle>{{ game.genre }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router'
import games from '../../data/games'

const router = useRouter()
const goToDetails = (id) => {
  router.push({ name: 'Details', params: { id } })
}
</script>

<style scoped>
/* Add your styles here */
</style>
