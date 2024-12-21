<script setup lang="ts">
import AppInfoListItem from './App-InfoListItem.vue';

defineProps<{ info: TrackingDocument }>();
</script>

<template>
  <div
    v-if="
      info.Status ||
      info.CargoDescriptionString ||
      info.PaymentMethod ||
      info.DateCreated ||
      info.ActualDeliveryDate
    "
  >
    <h3>Інформація про посилку</h3>
    <ul>
      <AppInfoListItem :infoString="info.Status">Статус: </AppInfoListItem>
      <AppInfoListItem :infoString="info.CargoDescriptionString"
        >Назва:
      </AppInfoListItem>
      <AppInfoListItem :infoString="info.PaymentMethod"
        >Спосіб оплати:
      </AppInfoListItem>
      <AppInfoListItem :infoString="info.DateCreated"
        >Створено:
      </AppInfoListItem>
      <AppInfoListItem :infoString="info.ActualDeliveryDate"
        >Доставлено:
      </AppInfoListItem>
    </ul>
  </div>
</template>

<style scoped></style>
