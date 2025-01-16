<script setup lang="ts">
import AppSpinner from './App-Spinner.vue';

defineProps<{
  isLoading?: boolean;
}>();
</script>

<template>
  <button class="button" type="button">
    <AppSpinner v-if="isLoading" />
    <slot v-if="!isLoading"></slot>
  </button>
</template>

<style scoped>
.button {
  background-color: var(--main-color);
  color: var(--main-bg);
  height: 32px;
  border: var(--button-border);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  cursor: pointer;
  transition: var(--transition);
  width: 100%;

  &:hover {
    box-shadow: var(--box-shadow);
  }

  &:disabled {
    background-color: var(--disabled-bg);
    color: var(--disabled-color);
    cursor: not-allowed;
    box-shadow: none;
    border: var(--button-border-disabled);
  }

  .pi {
    margin-left: 6px;
  }
}
</style>
