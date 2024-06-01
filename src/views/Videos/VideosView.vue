<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="6" lg="4" xl="3" v-for="video in videos" :key="video.id">
        <v-card @click="goToDetails(video.id)">
          <v-img :src="video.thumbnailUrl" height="200px" />
          <v-card-title>{{ video.title }}</v-card-title>
          <v-card-subtitle>{{ video.genre }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router'
import videos from '../../data/videos'

const router = useRouter()
const goToDetails = (id) => {
  router.push({ name: 'Details', params: { id } })
}
</script>

<style scoped>
/* Add your styles here */
</style>
