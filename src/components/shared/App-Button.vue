<script setup lang="ts">
import AppSpinner from './App-Spinner.vue';

defineProps<{
  isLoading: boolean;
}>();
</script>

<template>
  <button class="button" type="button">
    <AppSpinner v-if="isLoading" />
    <span v-if="!isLoading"><slot></slot></span>
  </button>
</template>

<style scoped>
.button {
  height: 32px;
  background-color: rgb(236, 65, 59);
  border: none;
  border-radius: 4px;
  color: rgb(250, 250, 250);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button:disabled {
  background-color: rgb(200, 200, 200);
  color: rgb(150, 150, 150);
  cursor: not-allowed;
}
</style>
