<script setup lang="ts">
import AppDeleteButton from '../shared/App-DeleteButton.vue';

defineProps<{
  number: string;
  status: string;
}>();
</script>

<template>
  <div class="wrapper">
    <p>{{ number }}</p>
    <p>{{ status }}</p>
    <AppDeleteButton />
  </div>
</template>

<style scoped>
@import '../../variables.css';

.wrapper {
  position: relative;
  border: var(--secondary-border);
  text-align: left;
  padding-right: 30px;
  padding-left: 6px;
  border-radius: 4px;
}
</style>
