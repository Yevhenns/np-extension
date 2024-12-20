<script setup lang="ts">
import AppList from '../components/list/App-List.vue';
</script>

<template>
  <div class="page">
    <AppList />
  </div>
</template>

<style scoped>
.page {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
