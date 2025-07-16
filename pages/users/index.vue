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
    <h2 class="subtitle">WHO ARE YOU ? </h2>
    
    <div v-if="userStore.isLoading" class="loading">loading...</div>

    <ul v-else class="user-list">
      <li
        v-for="user in userStore.users"
        :key="user.id"
        class="user-item"
      >
        <NuxtLink
          :to="`/users/${user.id}`"
          class="user-link"
        >
          {{ user.name }}
        </NuxtLink>
        <p class="user-email">{{ user.email }}</p>
      </li>    
    </ul>
  </div>
</template>

<style scoped>
.container {
  max-width: 700px;
  margin: 40px auto;
  padding: 0 15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: #222;
}

.loading {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
}

.user-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.user-item {
  border: 1px solid #ddd;
  padding: 16px 20px;
  margin-bottom: 16px;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;
}

.user-item:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.user-link {
  font-size: 1.25rem;
  font-weight: 600;
  color: #007acc;
  text-decoration: none;
}

.user-link:hover {
  text-decoration: underline;
}

.user-email {
  margin-top: 6px;
  font-size: 1rem;
  color: #555;
}
</style>