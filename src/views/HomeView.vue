<template>
  <v-container>
    <v-row>
      <v-col v-for="item in content" :key="item.id" cols="12" md="4" lg="4">
        <v-card @click="goToDetails(item.id)">
          <v-img :src="item.thumbnail" height="200px"></v-img>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-subtitle>{{ item.category }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const content = ref([])

onMounted(async () => {
  const response = await axios.get('/data/games.json')
  content.value = response.data
})

const router = useRouter()
const goToDetails = (id) => {
  router.push({ name: 'Details', params: { id } })
}
</script>

<style scoped></style>
