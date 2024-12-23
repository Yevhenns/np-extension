<script setup lang="ts">
import AppParcelDetails from './App-ParcelDetails.vue';
import AppRecipientDetails from './App-RecipientDetails.vue';
import AppSenderDetails from './App-SenderDetails.vue';

defineProps<{
  details: TrackingDocument;
}>();
</script>

<template>
  <div class="details">
    <AppParcelDetails :details="details" />
    <AppRecipientDetails :details="details" />
    <AppSenderDetails :details="details" />
  </div>
</template>

<style scoped>
.details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
