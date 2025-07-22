import { defineNuxtPlugin } from 'nuxt/app'
import { useTodoStore } from '@/store/todo'

export default defineNuxtPlugin(() => {
  const todoStore = useTodoStore()

  if (process.client) {
    const saved = localStorage.getItem('todos')
    if (saved) {
      todoStore.todos = JSON.parse(saved)
    }

    todoStore.$subscribe(() => {
      localStorage.setItem('todos', JSON.stringify(todoStore.todos))
    })
  }
})