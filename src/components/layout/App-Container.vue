<script setup lang="ts"></script>

<template>
  <div class="container"><slot></slot></div>
</template>

<style scoped>
.container {
  width: 360px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: auto;
  margin-right: auto;
}
</style>
