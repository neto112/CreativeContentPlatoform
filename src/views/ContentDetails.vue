<template>
  <v-container class="content-details-container">
    <v-row v-if="loading">
      <v-col cols="12" class="d-flex justify-center align-center">
        <v-progress-circular indeterminate color="blue" />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12" md="8">
        <v-img
          v-if="content"
          :src="content.thumbnail"
          height="auto"
          width="100%"
          class="mb-4 content-image"
        />
        <v-card-title class="content-title">{{ content.title }}</v-card-title>
        <v-card-subtitle class="content-category">{{ content.category }}</v-card-subtitle>
        <v-card-text class="content-description">{{ content.description }}</v-card-text>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="rating-card">
          <v-card-title class="rating-title">User Rating</v-card-title>
          <v-card-subtitle class="rating-subtitle">Overall Experience</v-card-subtitle>
          <v-card-text>
            <v-rating
              v-model="content.rating"
              length="5"
              half-increments
              readonly
              class="rating-stars"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useContentStore } from '../stores/content'

const content = ref(null)
const loading = ref(true)
const route = useRoute()
const contentStore = useContentStore()

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
  background-color: var(--v-gray100);
  padding: 24px;
  border-radius: 8px;
}

.content-image {
  border-radius: 8px;
  object-fit: cover;
}

.content-title {
  font-size: 2rem;
  color: var(--v-black);
  font-weight: bold;
}

.content-category {
  font-size: 1.2rem;
  color: var(--v-blue300);
  margin-bottom: 16px;
}

.content-description {
  font-size: 1rem;
  color: var(--v-black);
}

.rating-card {
  background-color: var(--v-white);
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.rating-title {
  font-size: 1.5rem;
  color: var(--v-black);
  font-weight: bold;
}

.rating-subtitle {
  font-size: 1rem;
  color: var(--v-blue300);
  margin-bottom: 8px;
}

.rating-stars {
  color: var(--v-blue300);
}

/* Responsividade */
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

  .rating-title {
    font-size: 1.2rem;
  }

  .rating-subtitle {
    font-size: 0.9rem;
  }
}
</style>
