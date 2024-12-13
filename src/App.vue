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
  <div class="wrapper">
    <AppForm :submitForm="setInfoData" />
    <p>Статус: {{ info?.Status }}</p>
    <p>Назва: {{ info?.CargoDescriptionString }}</p>
    <p>Спосіб оплати: {{ info?.PaymentMethod }}</p>
    <h3>Інформація про одержувача</h3>
    <p>Адреса: {{ info?.WarehouseRecipient }}</p>
    <p>ПІБ: {{ info?.RecipientFullNameEW }}</p>
    <p>Номер: +{{ info?.PhoneRecipient }}</p>
    <h3>Інформація про відправника</h3>
    <p>Адреса: {{ info?.WarehouseSender }}</p>
    <p>ПІБ: {{ info?.SenderFullNameEW }}</p>
    <p>Номер: +{{ info?.PhoneSender }}</p>
  </div>
</template>

<style scoped>
.wrapper {
  text-align: left;
}
</style>
