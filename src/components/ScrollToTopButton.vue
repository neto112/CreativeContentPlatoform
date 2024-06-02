<template>
  <v-btn v-if="isVisible" @click="scrollToTop" icon class="scroll-to-top" elevation="2">
    <v-icon icon="keyboard_arrow_up" />
  </v-btn>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleScroll = () => {
  isVisible.value = window.scrollY > 200
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: var(--v-primary);
  color: #fff;
  opacity: 0.6;
  z-index: 10;
  border-radius: 16px;
}
</style>
