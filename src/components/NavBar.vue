<template>
  <v-app-bar app class="px-2 app-bar-gradient">
    <v-row align="center">
      <v-col cols="auto" v-if="!mobile">
        <v-img
          src="https://gravity.blue/wp-content/uploads/2022/12/cropped-cropped-Filled_TextLongLogoNoUnderscore@2x-1.png"
          height="64"
          class="mr-4"
        />
      </v-col>
      <v-col :cols="mobile ? 9 : 3">
        <v-text-field
          v-model="search"
          append-inner-icon="search"
          placeholder="Search"
          hide-details
          @input="updateSearch"
          variant="filled"
          density="compact"
        />
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto" v-if="!mobile">
        <v-btn-toggle v-model="activeRoute" mandatory color="transparent" base-color="transparent">
          <v-btn
            v-for="route in routes"
            :key="route.path"
            :value="route.path"
            text
            :to="route.path"
            style="background: transparent"
            class="nav-btn"
            :class="{ 'active-nav-btn': isActive(route.path) }"
          >
            {{ route.name }}
          </v-btn>
        </v-btn-toggle>
      </v-col>
      <v-col cols="3" v-else>
        <v-menu offset-y width="150">
          <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props">
              <v-icon icon="menu" />
            </v-btn>
          </template>
          <v-list>
            <v-list-item to="/">
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item to="/games">
              <v-list-item-title>Games</v-list-item-title>
            </v-list-item>
            <v-list-item to="/videos">
              <v-list-item-title>Videos</v-list-item-title>
            </v-list-item>
            <v-list-item to="/artworks">
              <v-list-item-title>Artworks</v-list-item-title>
            </v-list-item>
            <v-list-item to="/musics">
              <v-list-item-title>Music</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useDisplay } from 'vuetify'
import { useContentStore } from '../stores/content'

// State for the search query
const search = ref('')
const contentStore = useContentStore()
const { mobile } = useDisplay()
const route = useRoute()

const activeRoute = ref(route.path)

const updateSearch = () => {
  contentStore.setSearchQuery(search.value)
}

const isActive = (path) => {
  return route.path === path
}

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Games', path: '/games' },
  { name: 'Videos', path: '/videos' },
  { name: 'Artworks', path: '/artworks' },
  { name: 'Musics', path: '/musics' }
]
</script>

<style scoped>
.app-bar-gradient {
  background: linear-gradient(90deg, var(--v-blue300), var(--v-gray100)) !important;
  color: var(--v-gray100);
}

.v-menu {
  color: var(--v-black);
}

.nav-btn {
  font-weight: bold;
}

.active-nav-btn {
  color: var(--v-blue300) !important;
}

.nav-btn:hover {
  color: var(--v-blue300);
}
</style>
