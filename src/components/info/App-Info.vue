<script setup lang="ts">
import AppParcelInfo from './App-ParcelInfo.vue';
import AppRecipientInfo from './App-RecipientInfo.vue';
import AppSenderInfo from './App-SenderInfo.vue';

defineProps<{ info: TrackingDocument }>();
</script>

<template>
  <div class="info">
    <AppParcelInfo :info="info" />
    <AppRecipientInfo :info="info" />
    <AppSenderInfo :info="info" />
  </div>
</template>

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
