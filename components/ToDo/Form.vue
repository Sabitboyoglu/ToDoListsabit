<script setup lang="ts">
import { ref } from 'vue'

const title = ref('')

const props = defineProps<{
  onAdd: (title: string) => void
}>()

function submit() {
  if (title.value.trim()) {
    props.onAdd(title.value)
    title.value = ''
  }
}
</script>

<template>
  <form @submit.prevent="submit" class="form">
    <input v-model="title" placeholder="Enter a new task..." class="input" />
    <button type="submit" class="btn">Add</button>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.input {
  flex: 1;
  padding: 10px 14px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.input:focus {
  outline: none;
  border-color: #007acc;
  box-shadow: 0 0 0 2px rgba(0, 122, 204, 0.2);
}

.btn {
  padding: 10px 16px;
  font-size: 1rem;
  background-color: #007acc;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
}

.btn:hover {
  background-color: #005fa3;
  transform: scale(1.03);
}
</style>