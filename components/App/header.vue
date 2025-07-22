<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useTodoStore } from '~/store/todo'
import { useUserStore } from '~/store/user'

const isDark = ref(false)

function toggleTheme() {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const userMenuOpen = ref(false)
function toggleUserMenu() {
  userMenuOpen.value = !userMenuOpen.value
}

const router = useRouter()
const todoStore = useTodoStore()

const userStore = useUserStore()

const selectedUserId = computed(() => userStore.selectedUserId ?? null)

const userTodos = computed(() => todoStore.getTodosByUser(selectedUserId.value))
const completedCount = computed(() => userTodos.value.filter(t => t.completed).length)
const remainingCount = computed(() => userTodos.value.length - completedCount.value)

function logout() {
  router.push('/users')
}
</script>

<template>
  <header class="w-full bg-gray-100 dark:bg-gray-800 p-4 flex justify-between items-center text-gray-900 dark:text-white">
    <div class="text-xl font-bold">To Do App</div>
    <div class="flex items-center gap-4">
      <button @click="toggleTheme" class="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded text-sm">
        {{ isDark ? '☀️ Light' : '🌙 Dark' }}
      </button>
      <div class="relative">
        <button @click="toggleUserMenu" class="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded text-sm">
          👤 User
        </button>
        <div
          v-if="userMenuOpen"
          class="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 border dark:border-gray-700 shadow rounded p-2 text-sm"
        >
          <ul>
            <li class="py-1 hover:underline cursor-pointer" @click="logout">Logout</li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>