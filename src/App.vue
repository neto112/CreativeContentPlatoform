<template>
  <v-app :style="cssProps">
    <NavBar />
    <v-row justify="center" no-gutters>
      <v-col :cols="mobile ? 12 : 10">
        <v-main class="mt-3">
          <router-view />
          <ScrollToTopButton />
        </v-main>
      </v-col>
    </v-row>
    <FooterView />
  </v-app>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme, useDisplay } from 'vuetify'
import NavBar from './components/NavBar.vue'
import FooterView from './components/FooterView.vue'
import ScrollToTopButton from './components/ScrollToTopButton.vue'

const theme = useTheme()
const { mobile } = useDisplay()

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
  text-transform: uppercase;
}
</style>
