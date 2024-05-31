<template>
  <v-container>
    <v-img
      :src="propItems.thumbnailUrl"
      height="400px"
      lazy-src="https://picsum.photos/id/11/10/6"
    />
    <v-card-title>{{ propItems.title }}</v-card-title>
    <v-card-text>Duration: {{ propItems.duration }}</v-card-text>
    <v-card-text>Upload Time: {{ propItems.uploadTime }}</v-card-text>
    <v-card-text>Views: {{ propItems.views }}</v-card-text>
    <v-card-text>Author: {{ propItems.author }}</v-card-text>
    <v-card-text>{{ propItems.description }}</v-card-text>
    <v-card-text>Subscribers: {{ propItems.subscriber }}</v-card-text>
    <v-rating
      v-if="propItems.rating"
      v-model="propItems.rating"
      background-color="yellow lighten-3"
    ></v-rating>
  </v-container>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  propItems: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
/* Add your styles here */
</style>
