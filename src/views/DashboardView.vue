<template>
  <v-container fluid>
    <v-card-text :class="mobile ? 'pa-4' : 'pa-2'"> Blue Gravity </v-card-text>
  </v-container>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
</script>

<style scoped></style>
