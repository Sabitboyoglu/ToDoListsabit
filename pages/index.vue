<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useColorMode } from '#imports' // Nuxt UI içinden gelir

const router = useRouter()
const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="welcome-page space-y-4 text-center">
    <h1 class="title text-3xl font-bold">Welcome to To Do App</h1>
    <p class="subtitle text-gray-500 dark:text-gray-400">Manage your tasks by user</p>

    <!-- Kullanıcı sayfasına yönlendirme -->
    <UButton
      label="View Users"
      color="primary"
      @click="router.push('/users')"
    />

    <!-- Tema geçiş düğmesi -->
    <UButton
      :label="colorMode.preference === 'dark' ? 'Switch to Light' : 'Switch to Dark'"
      color="gray"
      variant="ghost"
      @click="toggleTheme"
    />
  </div>
</template>

<style scoped>
.welcome-page {
  padding-top: 4rem;
}
</style>