<script setup lang="ts">
import AppDetailsListItem from './App-DetailsListItem.vue';

defineProps<{ info: TrackingDocument }>();
</script>

<template>
  <div
    v-if="
      info.CityRecipient ||
      info.WarehouseRecipient ||
      info.RecipientFullNameEW.trim() ||
      info.PhoneRecipient
    "
  >
    <h3>Інформація про одержувача</h3>
    <ul>
      <AppDetailsListItem :infoString="info.CityRecipient"
        >Місто:
      </AppDetailsListItem>
      <AppDetailsListItem :infoString="info.WarehouseRecipient"
        >Адреса:
      </AppDetailsListItem>
      <AppDetailsListItem :infoString="info.RecipientFullNameEW"
        >ПІБ:
      </AppDetailsListItem>
      <AppDetailsListItem :infoString="info.PhoneRecipient"
        >Номер:
      </AppDetailsListItem>
    </ul>
  </div>
</template>

<style scoped></style>
