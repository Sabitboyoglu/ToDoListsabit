<script setup lang="ts">
defineProps<{
  todo: {
    id: number
    title: string
    completed: boolean
  }
}>()
</script>

<template>
  <li
    class="flex justify-between items-center p-4 border rounded shadow-sm"
    :class="{ 'bg-green-100': todo.completed }"
  >
    <span>{{ todo.title }}</span>
    <span class="text-xs text-gray-500">
      {{ todo.completed ? 'Tamamlandı' : 'Bekliyor' }}
    </span>
  </li>
</template>

