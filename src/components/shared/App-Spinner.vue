<template>
  <span class="spinner" />
</template>

<style scoped>
@import '../../variables.css';

.spinner {
  width: 26px;
  height: 26px;
  border: var(--light-border);
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
