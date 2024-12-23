<script setup lang="ts">
defineProps<{ detailsString: string }>();
</script>

<template>
  <li v-if="detailsString">
    <p>
      <span class="span"><slot></slot></span>{{ detailsString }}
    </p>
  </li>
</template>

<style scoped>
.span {
  font-weight: 600;
}
</style>
