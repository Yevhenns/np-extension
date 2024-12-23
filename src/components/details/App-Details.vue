<script setup lang="ts">
import AppParcelDetails from './App-ParcelDetails.vue';
import AppRecipientDetails from './App-RecipientDetails.vue';
import AppSenderDetails from './App-SenderDetails.vue';

defineProps<{
  info: TrackingDocument;
}>();
</script>

<template>
  <div class="info">
    <AppParcelDetails :info="info" />
    <AppRecipientDetails :info="info" />
    <AppSenderDetails :info="info" />
  </div>
</template>

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
