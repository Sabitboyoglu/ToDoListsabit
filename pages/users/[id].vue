<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useTodoStore } from '~/store/todo'
import { onMounted, computed } from 'vue'
import TodoForm from '~/components/TodoForm.vue'

const route = useRoute()
const todoStore = useTodoStore()

const userId = Number(route.params.id)

const todos = computed(() => todoStore.getTodosByUser(userId))

function addNewTodo(title: string) {
  todoStore.addTodo(userId, title)
}

function deleteTodo(id: number) {
  todoStore.deleteTodo(id)
}

function toggleComplete(id: number) {
  todoStore.toggleTodo(id)
}
</script>

<template>
  <div class="container">
    <h1 class="title">Tasks (User ID: {{ userId }})</h1>

    <TodoForm :onAdd="addNewTodo" />

    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        <input type="checkbox" :checked="todo.completed" @change="toggleComplete(todo.id)" />
        <NuxtLink :to="`/users/${userId}/todos/${todo.id}`">{{ todo.title }}</NuxtLink>
        <button @click="deleteTodo(todo.id)">🗑️</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  max-width: 700px;
  margin: 40px auto;
  padding: 20px;
}
.title {
  font-size: 1.8rem;
  margin-bottom: 20px;
}
.todo-list {
  list-style: none;
  padding: 0;
}
.todo-item {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 12px;
}
</style>