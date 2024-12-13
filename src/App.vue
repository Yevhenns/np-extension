<script setup lang="ts">
import { ref } from 'vue';
import { getInfo } from './api/getInfo';
import AppButton from './components/shared/App-Button.vue';

const info = ref<TrackingDocument | null>(null);

const setInfoData = async () => {
  const data = await getInfo({ documentNumber: '20400391438881' });
  if (data) {
    info.value = data;
  }
};
</script>

<template>
  <div>
    <AppButton @click="setInfoData">Пошук</AppButton>
    <p>{{ info }}</p>
    <p>Статус: {{ info?.Status }}</p>
    <p>Адреса отримувача: {{ info?.WarehouseRecipient }}</p>
    <p>Адреса відправника: {{ info?.WarehouseSender }}</p>
  </div>
</template>

<style scoped></style>
