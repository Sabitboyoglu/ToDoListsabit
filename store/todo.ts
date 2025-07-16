// store/todo.ts
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as { id: number; userId: number; title: string; completed: boolean }[],
    nextId: 1000 // Yeni görev ID'si için sayaç
  }),

  actions: {
    getTodosByUser(userId: number) {
      return this.todos.filter(todo => todo.userId === userId)
    },

    addTodo(userId: number, title: string) {
      const newTodo = {
        id: this.nextId++,
        userId,
        title,
        completed: false
      }
      this.todos.push(newTodo)
    },

    deleteTodo(id: number) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },

    toggleTodo(id: number) {
      const todo = this.todos.find(t => t.id === id)
      if (todo) todo.completed = !todo.completed
    },

    getTodoDetail(id: number) {
      return this.todos.find(t => t.id === id)
    }
  }
})