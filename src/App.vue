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
    <header class="header">
      <img src="../public/logo.png" alt="logo" width="32" height="32" />
      <h3>Трекінг посилок НП</h3>
    </header>
    <AppForm :submitForm="setInfoData" />
    <p><span class="span">Статус: </span>{{ info?.Status }}</p>
    <p><span class="span">Назва: </span>{{ info?.CargoDescriptionString }}</p>
    <p><span class="span">Спосіб оплати: </span>{{ info?.PaymentMethod }}</p>
    <h3>Інформація про одержувача</h3>
    <p><span class="span">Адреса: </span>{{ info?.WarehouseRecipient }}</p>
    <p><span class="span">ПІБ: </span>{{ info?.RecipientFullNameEW }}</p>
    <p><span class="span">Номер: </span>+{{ info?.PhoneRecipient }}</p>
    <h3>Інформація про відправника</h3>
    <p><span class="span">Адреса: </span>{{ info?.WarehouseSender }}</p>
    <p><span class="span">ПІБ: </span>{{ info?.SenderFullNameEW }}</p>
    <p><span class="span">Номер: </span>+{{ info?.PhoneSender }}</p>
  </div>
</template>

<style scoped>
.wrapper {
  text-align: left;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.header {
  display: flex;
  gap: 20px;
  align-items: center;
}
.span {
  font-weight: 600;
}
</style>
