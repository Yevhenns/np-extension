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
@import '../../variables.css';

.button {
  background-color: var(--main-color);
  color: var(--main-bg);
  height: 32px;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.button:disabled {
  background-color: var(--disabled-bg);
  color: var(--disabled-color);
  cursor: not-allowed;
}
</style>
