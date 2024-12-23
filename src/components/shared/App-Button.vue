<script setup lang="ts">
import { useParcelsStore } from '../../store/parcels';
import AppSpinner from './App-Spinner.vue';

const store = useParcelsStore();
</script>

<template>
  <button class="button" type="button">
    <AppSpinner v-if="store.isLoading" />
    <slot v-if="!store.isLoading"></slot>
  </button>
</template>

<style scoped>
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
  width: 100%;
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
