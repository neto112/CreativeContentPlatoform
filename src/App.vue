<template>
  <v-app :style="cssProps">
    <NavBar />
    <v-main class="mt-3">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import NavBar from './components/NavBar.vue'

const theme = useTheme()

const cssProps = computed(() => {
  const themeColors: { [key: string]: string } = {}
  const colors = theme.themes.value.light.colors
  Object.keys(colors).forEach((color) => {
    themeColors[`--v-${color}`] = colors[color]
  })
  return themeColors
})
</script>

<style>
#app {
  font-family: Arial, sans-serif;
}

.card-shadow {
  box-shadow: 0px 8px 24px 0px #959da53d !important;
  border: 1px solid #e1e2e633 !important;
  border-radius: 16px !important;
}

.btn-text-transform {
  text-transform: uppercase; /* Change to whatever text-transform you need */
}
</style>
