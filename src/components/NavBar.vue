<template>
  <v-app-bar app>
    <v-toolbar-title>Content Platform</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field
      v-model="search"
      append-inner-icon="search"
      label="Search"
      single-line
      hide-details
      rounded="xl"
    />
    <v-btn to="/">Home</v-btn>
    <v-btn to="/games">Games</v-btn>
    <v-btn to="/videos">Videos</v-btn>
    <v-btn to="/artwork">Artwork</v-btn>
    <v-btn to="/music">Music</v-btn>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue'

const search = ref('')
</script>

<style scoped>
/* Add your styles here */
</style>
