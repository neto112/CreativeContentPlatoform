<template>
  <v-card flat class="content-details-container" :class="mobile ? 'mx-2' : ''">
    <v-row v-if="loading">
      <v-col cols="12" class="d-flex justify-center align-center">
        <v-progress-circular indeterminate color="primary" />
      </v-col>
    </v-row>
    <v-row v-else align="center">
      <v-col cols="12" md="6">
        <tempalte v-if="content.videoUrl">
          <video controls :src="content.videoUrl" width="100%" class="mb-4 content-video" />
        </tempalte>
        <template v-else>
          <v-img
            v-if="content"
            :src="content.thumbnail"
            height="auto"
            width="100%"
            class="mb-4 content-image"
            lazy-src="https://picsum.photos/id/11/10/6"
          />
        </template>
      </v-col>
      <v-col cols="12" md="6">
        <v-card-title class="text-primary content-title">{{ content.title }}</v-card-title>
        <v-card-subtitle class="content-category">{{ content.category }}</v-card-subtitle>
        <v-card-text class="content-description" v-html="content.description" />
        <v-card-actions class="pt-0">
          <span class="text-caption me-2">({{ content.rating }})</span>
          <v-rating v-model="content.rating" length="5" half-increments readonly color="primary" />
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useContentStore } from '../stores/content'
import { useDisplay } from 'vuetify'

const content = ref(null)
const loading = ref(true)
const route = useRoute()
const contentStore = useContentStore()
const { mobile } = useDisplay()

const loadContent = () => {
  loading.value = true
  const { id } = route.params
  content.value = contentStore.getContentById(id)
  loading.value = false
}

onMounted(() => {
  if (contentStore.content.length === 0) {
    contentStore.loadContent()
  }
  loadContent()
})
</script>

<style scoped>
.content-details-container {
  background-color: var(--v-secondary);
  padding: 24px;
  border-radius: 8px;
}

.content-image {
  border-radius: 8px;
  object-fit: cover;
}

.content-title {
  font-size: 2rem;
  font-weight: bold;
}

.content-category {
  font-size: 1.2rem;
  color: var(--v-primary);
  margin-bottom: 16px;
}

.content-description {
  font-size: 1rem;
  color: var(--v-primary);
}

@media (max-width: 960px) {
  .content-title {
    font-size: 1.5rem;
  }

  .content-category {
    font-size: 1rem;
  }

  .content-description {
    font-size: 0.9rem;
  }
}
</style>
