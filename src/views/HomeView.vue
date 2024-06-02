<template>
  <div :class="mobile ? 'px-2' : ''">
    <v-data-iterator
      :items="filteredContent"
      :items-per-page="itemsPerPage"
      v-model:page="page"
      v-if="!mobile"
    >
      <template v-slot:default="{ items }">
        <v-row>
          <v-col v-for="item in items" :key="item.id" cols="12" sm="6" md="4" lg="3">
            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <v-card
                  v-bind="props"
                  class="mb-4 desktop-card card-shadow"
                  @click="goToDetails(item.raw.id)"
                  :color="isHovering ? 'secondary' : undefined"
                >
                  <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    :src="
                      item.raw.thumbnail
                        ? item.raw.thumbnail
                        : '../public/img/no-image-art-work.png'
                    "
                    cover
                    height="170"
                  />
                  <v-card-title class="text-primary">{{ item.raw.title }}</v-card-title>
                  <v-card-subtitle class="font-weight-bold">
                    {{ item.raw.category }}
                  </v-card-subtitle>
                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-row>
      </template>
      <template v-slot:footer>
        <v-pagination
          v-model="page"
          :length="Math.ceil(filteredContent.length / itemsPerPage)"
          total-visible="7"
          class="custom-pagination"
          v-if="Math.ceil(filteredContent.length / itemsPerPage) > 1"
          color="primary"
          rounded="lg"
        />
      </template>
      <template v-slot:no-data>
        <v-alert type="info" dismissible> No results found for your search. </v-alert>
      </template>
    </v-data-iterator>

    <v-row v-else>
      <v-col cols="12">
        <div
          v-for="(category, idx) in filteredCategories"
          :key="category.name"
          class="mobile-category"
        >
          <h2 :class="idx !== 0 ? 'pt-6' : ''">{{ category.name }}</h2>
          <v-carousel
            v-if="filteredCategories[idx].items.length > 0"
            cycle
            interval="5000"
            class="height-carousel"
            hide-delimiter-background
            color="primary"
          >
            <v-carousel-item
              v-for="(item, index) in filteredCategories[idx].items"
              :key="index"
              @click="goToDetails(item.id)"
            >
              <v-card-title class="text-primary">{{ item.title }}</v-card-title>
              <v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                :src="item.thumbnail ? item.thumbnail : '../public/img/no-image-art-work.png'"
                class="height-img"
                cover
              />
            </v-carousel-item>
          </v-carousel>
          <v-row v-if="filteredCategories[idx].items.length === 0">
            <v-col cols="12" class="text-center">
              <v-alert type="info" dismissible> No results found for {{ category.name }}. </v-alert>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useDisplay } from 'vuetify'
import { useContentStore } from '../stores/content'

const { mobile } = useDisplay()

// Accessing the content store
const contentStore = useContentStore()
const router = useRouter()
const page = ref(1)
const itemsPerPage = ref(12)

// Navigate to the details page of the selected content
const goToDetails = (id) => {
  router.push({ name: 'Details', params: { id } })
}

// Computed property for filtering content based on the search query
const filteredContent = computed(() => contentStore.filteredContent)

const filteredCategories = computed(() => {
  return contentStore.categories.map((category) => ({
    ...category,
    items: category.items.filter(
      (item) =>
        item.title.toLowerCase().includes(contentStore.searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(contentStore.searchQuery.toLowerCase())
    )
  }))
})

// Load content when the component is mounted
onMounted(() => {
  contentStore.loadContent()
})
</script>

<style scoped>
.mb-4 {
  margin-bottom: 16px;
}

.desktop-card {
  color: var(--v-primary);
}

.desktop-card .v-card-title,
.desktop-card .v-card-subtitle {
  color: var(--v-primary);
}

.mobile-category h2 {
  color: var(--v-primary);
  margin-bottom: 16px;
}

.mobile-card {
  background-color: var(--v-secondary);
  color: var(--v-primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.mobile-card .v-card-title,
.mobile-card .v-card-subtitle {
  color: var(--v-primary);
  text-align: center;
}

.v-carousel {
  background-color: var(--v-secondary);
}

:deep(.v-window__controls button) {
  opacity: 0.7;
}

h2 {
  color: var(--v-primary);
}

.height-carousel {
  height: 640px !important;
}

.height-img {
  height: 520px;
}

@media (max-width: 600px) {
  .height-carousel {
    height: 340px !important;
  }

  .height-img {
    height: 240px;
  }
}
</style>
