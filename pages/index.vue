<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="welcome-page flex flex-col items-center justify-center min-h-screen px-4 space-y-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white">Welcome to To Do App</h1>
      <p class="mt-2 text-lg text-gray-600 dark:text-gray-300">Manage your tasks by user</p>
    </div>

    <div class="flex flex-col sm:flex-row gap-4">
      <UButton
        label="View Users"
        color="primary"
        size="lg"
        icon="i-heroicons-user-group"
        @click="router.push('/users')"
      />
    </div>
  </div>
</template>

<style scoped>
.welcome-page {
  transition: background-color 0.3s ease;
}
</style>