<script setup lang="ts"></script>

<template>
  <button class="button-close" type="button">
    <i class="pi pi-times" style="font-size: 16px"></i>
  </button>
</template>

<style scoped>
@import '../../variables.css';

.button-close {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  transition: var(--transition);
}

.button-close:hover .pi-times {
  transform: scale(1.05);
}
</style>
