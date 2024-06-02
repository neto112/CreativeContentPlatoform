<template>
  <v-footer>
    <v-row justify="center" class="text-center">
      <v-col cols="12">
        <span>&copy; {{ new Date().getFullYear() }} Blue Gravity. All rights reserved.</span>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup></script>

<style scoped>
.v-footer {
  background-color: var(--v-black);
  color: #fff;
  padding: 16px;
}
</style>
