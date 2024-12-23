<script setup lang="ts">
import AppDetailsListItem from './App-DetailsListItem.vue';

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
      <AppDetailsListItem :infoString="info.Status"
        >Статус:
      </AppDetailsListItem>
      <AppDetailsListItem :infoString="info.CargoDescriptionString"
        >Назва:
      </AppDetailsListItem>
      <AppDetailsListItem :infoString="info.PaymentMethod"
        >Спосіб оплати:
      </AppDetailsListItem>
      <AppDetailsListItem :infoString="info.DateCreated"
        >Створено:
      </AppDetailsListItem>
      <AppDetailsListItem :infoString="info.ActualDeliveryDate"
        >Доставлено:
      </AppDetailsListItem>
    </ul>
  </div>
</template>

<style scoped></style>
