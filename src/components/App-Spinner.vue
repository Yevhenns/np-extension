<template>
  <span class="spinner" />
</template>

<style scoped>
.spinner {
  width: 26px;
  height: 26px;
  border: 2px solid rgb(250, 250, 250);
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
