<template>
  <div :class="mobile ? 'px-2' : ''">
    <div v-if="filteredContent.length === 0">
      <v-alert type="info" dismissible> No results found for your search. </v-alert>
    </div>
    <v-row v-else>
      <v-col v-for="item in filteredContent" :key="item.id" cols="12" sm="6" md="4" lg="3">
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-card
              v-bind="props"
              class="mb-4 desktop-card card-shadow"
              @click="goToDetails(item.id)"
              :color="isHovering ? 'secondary' : undefined"
            >
              <v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                :src="item.thumbnail ? item.thumbnail : '../public/img/no-image-art-work.png'"
                cover
                :height="mobile ? 200 : 170"
              />
              <v-card-title class="text-primary">{{ item.title }}</v-card-title>
              <v-card-subtitle class="font-weight-bold">
                {{ item.category }}
              </v-card-subtitle>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useContentStore } from '../stores/content'
import { useDisplay } from 'vuetify'

const contentStore = useContentStore()
const route = useRoute()
const { mobile } = useDisplay()

const filteredContent = computed(() => {
  return contentStore.filteredContent.filter(
    (item) => item.category.toLowerCase() === route.name.toLowerCase()
  )
})

onMounted(() => {
  if (contentStore.content.length === 0) {
    contentStore.loadContent()
  }
})

const router = useRouter()
const goToDetails = (id) => {
  router.push({ name: 'Details', params: { id } })
}
</script>

<style scoped>
.mb-4 {
  margin-bottom: 16px;
}

.v-card-title {
  color: var(--v-primary);
}

.v-card-subtitle {
  color: var(--v-secondary);
}

.desktop-card {
  color: var(--v-primary);
}

.desktop-card .v-card-title,
.desktop-card .v-card-subtitle {
  color: var(--v-primary);
}
</style>
