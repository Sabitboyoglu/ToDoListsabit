<template>
  <div class="p-4 border rounded shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition">
    <NuxtLink :to="`/users/${user.id}`" class="text-blue-600 hover:underline">
      {{ user.name }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  user: {
    id: number
    name: string
  }
}>()
</script>