import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<{ id: number; userId: number; title: string; completed: boolean }[]>([])
  const nextId = ref(1000)

  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('todos')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) {
          todos.value = parsed
          
          nextId.value = todos.value.reduce((max, t) => Math.max(max, t.id), 999) + 1
        }
      } catch (e) {
        console.error('Error parsing todos from localStorage', e)
      }
    }
  }

  if (typeof window !== 'undefined') {
    watch(
      todos,
      (newTodos) => {
        localStorage.setItem('todos', JSON.stringify(newTodos))
      },
      { deep: true }
    )
  }

  function getTodosByUser(userId: number) {
    return todos.value.filter(t => t.userId === userId)
  }

  function addTodo(userId: number, title: string) {
    todos.value.push({
      id: nextId.value++,
      userId,
      title,
      completed: false
    })
  } 

  function deleteTodo(id: number) {
    todos.value = todos.value.filter(t => t.id !== id)
  }

  function toggleTodo(id: number) {
    const todo = todos.value.find(t => t.id === id)
    if (todo) todo.completed = !todo.completed
  }

  function getTodoDetail(id: number) {
    return todos.value.find(t => t.id === id)
  }

  return {
    todos,
    nextId,
    getTodosByUser,
    addTodo,
    deleteTodo,
    toggleTodo,
    getTodoDetail
  }
})