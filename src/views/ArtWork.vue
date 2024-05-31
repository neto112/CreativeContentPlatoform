<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="6" lg="4" xl="3" v-for="item in items" :key="item.id">
        <v-card @click="goToDetails(item.id)">
          <v-img
            height="200"
            cover
            eager
            lazy-src="https://picsum.photos/id/11/10/6"
            :src="
              item.image_id
                ? `https://www.artic.edu/iiif/2/${item.image_id}/full/!800,800/0/default.jpg`
                : '../public/img/no-image-art-work.png'
            "
          ></v-img>
          <v-card-title>{{ item.title ? item.title : 'No title' }}</v-card-title>
          <v-card-subtitle>{{ item.artwork_type_title }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useArtWorkStore } from '@/stores/artwork'
import { onMounted, computed } from 'vue'

const router = useRouter()

const goToDetails = (id) => {
  router.push({ name: 'Details', params: { id } })
}

const artWorkStore = useArtWorkStore()

const items = computed(() => artWorkStore.artWork)

onMounted(async () => {
  await artWorkStore.getArtWork()
})
</script>

<style scoped>
/* Add your styles here */
</style>
