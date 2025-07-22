import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as { id: number; name: string; email: string }[],
    isLoading: false,
    selectedUserId: null as number | null,
  }),

  actions: {
    async fetchUsers() {
      this.isLoading = true
      try {
        const response = await $fetch('https://jsonplaceholder.typicode.com/users')

        this.users = response
      } catch (error) {
        console.error('Kullanıcılar alınamadı:', error)
      } finally {
        this.isLoading = false
      }
    },

    selectUser(id: number) {
      this.selectedUserId = id
    },

    getUserById(id: number) {
      return this.users.find(u => u.id === id)
    },
  },
})