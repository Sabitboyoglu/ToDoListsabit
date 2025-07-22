<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useTodoStore } from '~/store/todo'
import { onMounted, computed, ref } from 'vue'
import TodoForm from '~/components/ToDo/Form.vue'

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

const editingId = ref<number | null>(null)
const editedTitle = ref('')

function startEditing(todoId: number, currentTitle: string) {
  editingId.value = todoId
  editedTitle.value = currentTitle
}

function saveEditedTitle(todoId: number) {
  if (editedTitle.value.trim()) {
    const todo = todoStore.getTodoDetail(todoId)
    if (todo) {
      todo.title = editedTitle.value
    }
    editingId.value = null
  }
}
</script>

<template>
  <div class="container">
    <h1 class="title">Tasks (User ID: {{ userId }})</h1>

    <TodoForm :onAdd="addNewTodo" />

    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        <input type="checkbox" :checked="todo.completed" @change="toggleComplete(todo.id)" />

        <div v-if="editingId === todo.id" class="flex-1">
          <input v-model="editedTitle" class="input-edit" @keyup.enter="saveEditedTitle(todo.id)" />
        </div>
        <div v-else class="flex-1">
          <NuxtLink :to="`/users/${userId}/todos/${todo.id}`">{{ todo.title }}</NuxtLink>
        </div>

        <button @click="startEditing(todo.id, todo.title)" v-if="editingId !== todo.id">✏️</button>
        <button @click="saveEditedTitle(todo.id)" v-if="editingId === todo.id">💾</button>
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
.input-edit {
  width: 100%;
  padding: 6px 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}
</style>