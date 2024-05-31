<template>
  <div>
    <NavBar />
  </div>
  <!-- <v-navigation-drawer v persistent fixed app hide-overlay color="#FFF">
    <div class="pa-2">olá</div>
    <template v-slot:append>
      <div>olá</div>
    </template>
  </v-navigation-drawer>
  <v-app-bar app flat dense class="px-4" color="#fff">
    <v-row align="center">
      <v-col cols="auto">
        <v-app-bar-nav-icon @click.stop="stop" />
      </v-col>
      <v-col :cols="mobile ? 12 : ''" v-if="!mobile"> olá </v-col>
      <v-spacer v-if="mobile"></v-spacer>
      <v-col cols="auto" v-if="mobile"> tudo bem? </v-col>
    </v-row>
  </v-app-bar>
  <RouterView /> -->
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar.vue'
import { ref } from 'vue'
import { useDisplay } from 'vuetify'

const search = ref('')

const stop = ref()

const { mobile } = useDisplay()
</script>

<style scoped></style>
