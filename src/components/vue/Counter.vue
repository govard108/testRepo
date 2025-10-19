<script setup lang="ts">
import { ref } from 'vue';
const count = ref(0);
</script>

<template>
  <div style="display:flex; align-items:center; gap:0.5rem;">
    <button @click="count--" aria-label="Уменьшить">−</button>
    <strong>{{ count }}</strong>
    <button @click="count++" aria-label="Увеличить">+</button>
  </div>
</template>

<style scoped>
button {
  padding: 0.25rem 0.6rem;
  border: 1px solid #e5e7eb;
  background: white;
  border-radius: 6px;
  cursor: pointer;
}
button:hover { background: #f3f4f6; }
</style>
