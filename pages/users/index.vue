<script setup lang="ts">
import { useUserStore } from '~/store/user'
import { onMounted } from 'vue'

const userStore = useUserStore()

onMounted(() => {
  if (userStore.users.length === 0) {
    userStore.fetchUsers()
  }
})
</script>

<template>
  <div class="container">
    <h1 class="title">To Do App</h1>
    <h2 class="subtitle">WHO ARE YOU ?</h2>

    <div v-if="userStore.isLoading" class="loading">Loading...</div>

    <ul v-else class="user-list">
      <li v-for="user in userStore.users" :key="user.id" class="user-item">
        <div class="user-content">
          <span class="user-name" @click.prevent>{{ user.name }}</span>
          <NuxtLink :to="`/users/${user.id}`" class="user-button">→ Go to User</NuxtLink>
        </div>
        <p class="user-email">{{ user.email }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow-y: auto;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: var(--color-text, #ff5a5a);
}

.subtitle {
  text-align: center;
  margin-bottom: 16px;
  font-size: 1.2rem;
  color: var(--color-subtext, #afea5c);
}

.loading {
  text-align: center;
  font-size: 1.2rem;
  color: var(--color-subtext, #d5bcbc);
}

.user-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.user-item {
  padding: 16px 20px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background-color: #fff;
  transition: box-shadow 0.3s ease;
}

.user-item:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.dark .user-item {
  background-color: #1a1a1a;
  border-color: #333;
  color: #f1f1f1;
}

.user-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.user-name {
  font-size: 1.25rem;
  font-weight: 600;
  cursor: default;
  color: #007acc;
}

.dark .user-name {
  color: #66ccff;
}

.user-button {
  font-size: 0.95rem;
  background-color: #007acc;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.user-button:hover {
  background-color: #005f99;
}

.dark .user-button {
  background-color: #3399ff;
  color: black;
}

.dark .user-button:hover {
  background-color: #1f78d1;
}

.user-email {
  margin-top: 6px;
  font-size: 1rem;
  color: #555;
}

.dark .user-email {
  color: #ccc;
}
</style>