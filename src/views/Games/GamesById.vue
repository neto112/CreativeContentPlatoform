<template>
  <v-img :src="propItems.thumbnail" height="400px" lazy-src="https://picsum.photos/id/11/10/6" />
  <v-card-title>{{ propItems.title }}</v-card-title>
  <v-card-subtitle>{{ propItems.genre }}</v-card-subtitle>
  <v-card-text>{{ propItems.short_description }}</v-card-text>
  <v-card-text>Platform: {{ propItems.platform }}</v-card-text>
  <v-card-text>Publisher: {{ propItems.publisher }}</v-card-text>
  <v-card-text>Developer: {{ propItems.developer }}</v-card-text>
  <v-card-text>Release Date: {{ propItems.release_date }}</v-card-text>
  <v-rating
    v-if="propItems.rating"
    v-model="propItems.rating"
    background-color="yellow lighten-3"
  ></v-rating>
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
