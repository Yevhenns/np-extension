<script setup lang="ts">
defineProps<{ infoString: string | null }>();
</script>

<template>
  <li v-if="infoString">
    <p>
      <span class="span"><slot></slot></span>{{ infoString }}
    </p>
  </li>
</template>

<style scoped>
.span {
  font-weight: 600;
}
</style>
