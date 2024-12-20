<script setup lang="ts">
import AppSpinner from './App-Spinner.vue';

defineProps<{
  isLoading?: boolean;
  icon?: string;
}>();
</script>

<template>
  <button class="button" type="button">
    <AppSpinner v-if="isLoading" />
    <span v-if="!isLoading"><slot></slot></span>
    <i class="pi" :class="icon" v-if="icon" style="font-size: 16px"></i>
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
  padding: 0 8px;
  cursor: pointer;
  transition: var(--transition);
}

.button:hover {
  box-shadow: var(--box-shadow);
}

.button:disabled {
  background-color: var(--disabled-bg);
  color: var(--disabled-color);
  cursor: not-allowed;
  box-shadow: none;
}

.pi {
  margin-left: 6px;
}
</style>
