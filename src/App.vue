<script setup lang="ts">
import { ref } from 'vue';
import { getInfo } from './api/getInfo';
import AppForm from './components/App-Form.vue';

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
    <AppForm :submitForm="setInfoData" />
    <p>{{ info }}</p>
    <p>Статус: {{ info?.Status }}</p>
    <p>Адреса отримувача: {{ info?.WarehouseRecipient }}</p>
    <p>Адреса відправника: {{ info?.WarehouseSender }}</p>
  </div>
</template>

<style scoped></style>
