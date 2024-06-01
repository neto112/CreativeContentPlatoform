<template>
  <v-container>
    <v-row>
      <template v-if="!mobile">
        <v-col v-for="item in filteredContent" :key="item.id" cols="12" sm="6" md="4" lg="3">
          <v-card class="mb-4 desktop-card card-shadow" @click="goToDetails(item.id)">
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              :src="item.thumbnail ? item.thumbnail : '../public/img/no-image-art-work.png'"
              cover
              height="150"
            />
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-subtitle>{{ item.category }}</v-card-subtitle>
          </v-card>
        </v-col>
      </template>

      <v-col v-else cols="12">
        <div v-for="category in filteredCategories" :key="category.name" class="mobile-category">
          <h2 class="pt-6">{{ category.name }}</h2>
          <v-carousel cycle interval="5000" height="370" hide-delimiter-background color="black">
            <v-carousel-item
              v-for="(item, index) in category.items"
              :key="index"
              @click="goToDetails(item.id)"
            >
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-subtitle>{{ item.category }}</v-card-subtitle>
              <v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                :src="item.thumbnail ? item.thumbnail : '../public/img/no-image-art-work.png'"
                height="250"
                cover
              />
            </v-carousel-item>
          </v-carousel>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useRouter } from 'vue-router'
import { useContentStore } from '../stores/content'

const { mobile } = useDisplay()
const contentStore = useContentStore()
const router = useRouter()

const goToDetails = (id) => {
  router.push({ name: 'Details', params: { id } })
}

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

onMounted(() => {
  contentStore.loadContent()
})
</script>

<style scoped>
.mb-4 {
  margin-bottom: 16px;
}

.desktop-card {
  background-color: var(--white);
  color: var(--v-black);
}

.desktop-card .v-card-title,
.desktop-card .v-card-subtitle {
  color: var(--v-black);
}

.mobile-category h2 {
  color: var(--v-black);
  margin-bottom: 16px;
}

.mobile-card {
  background-color: var(--v-white);
  color: var(--v-black);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.mobile-card .v-card-title,
.mobile-card .v-card-subtitle {
  color: var(--v-black);
  text-align: center;
}

.v-carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--v-gray100);
}

.v-carousel {
  background-color: var(--v-gray100);
}

h2 {
  color: var(--v-blue300);
}
</style>
