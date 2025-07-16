<script setup lang="ts">

const router = useRouter()
</script>

<template>
  <div class="welcome-page">
    <h1 class="title">Welcome to To Do App</h1>
    <p class="subtitle">Manage your tasks by user</p>
    <button to="/users" class="users-button" @click="() => {
    }">
      View Users

    </button>
    <UButton color="primary" variant="link" label="toggle theme"></UButton>

  </div>
</template>

  