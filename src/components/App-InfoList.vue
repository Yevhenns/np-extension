<script setup lang="ts">
defineProps<{ info: TrackingDocument | null }>();
</script>

<template>
  <div class="infoList">
    <div v-if="info?.Status">
      <h3>Інформація про посилку</h3>
      <ul>
        <li>
          <p><span>Статус: </span>{{ info?.Status }}</p>
        </li>
        <li v-if="info?.CargoDescriptionString">
          <p><span>Назва: </span>{{ info?.CargoDescriptionString }}</p>
        </li>
        <li v-if="info?.PaymentMethod">
          <p><span>Спосіб оплати: </span>{{ info?.PaymentMethod }}</p>
        </li>
      </ul>
    </div>

    <div
      v-if="
        info?.WarehouseRecipient ||
        info?.WarehouseRecipient ||
        info?.PhoneRecipient
      "
    >
      <h3>Інформація про одержувача</h3>
      <ul>
        <li v-if="info?.WarehouseRecipient">
          <p><span>Адреса: </span>{{ info?.WarehouseRecipient }}</p>
        </li>
        <li v-if="info?.WarehouseRecipient">
          <p><span>ПІБ: </span>{{ info?.WarehouseRecipient }}</p>
        </li>
        <li v-if="info?.PhoneRecipient">
          <p><span>Номер: </span>+{{ info?.PhoneRecipient }}</p>
        </li>
      </ul>
    </div>

    <div
      v-if="
        info?.WarehouseSender || info?.SenderFullNameEW || info?.PhoneSender
      "
    >
      <h3>Інформація про відправника</h3>
      <ul>
        <li v-if="info?.WarehouseSender">
          <p><span>Адреса: </span>{{ info?.WarehouseSender }}</p>
        </li>
        <li v-if="info?.SenderFullNameEW">
          <p><span>ПІБ: </span>{{ info?.SenderFullNameEW }}</p>
        </li>
        <li v-if="info?.PhoneSender">
          <p><span>Номер: </span>+{{ info?.PhoneSender }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.infoList {
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    font-weight: 600;
  }
}
</style>
