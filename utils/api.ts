// utils/api.ts
export async function fetchTodosByUser(userId: number) {
  return await $fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
}