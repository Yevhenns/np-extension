<script setup lang="ts">
import AppDetailsListItem from './App-DetailsListItem.vue';

defineProps<{ details: TrackingDocument }>();
</script>

<template>
  <div
    v-if="
      details.CityRecipient ||
      details.WarehouseRecipient ||
      details.RecipientFullNameEW.trim() ||
      details.PhoneRecipient
    "
  >
    <h3>Інформація про одержувача</h3>
    <ul>
      <AppDetailsListItem :detailsString="details.CityRecipient"
        >Місто:
      </AppDetailsListItem>
      <AppDetailsListItem :detailsString="details.WarehouseRecipient"
        >Адреса:
      </AppDetailsListItem>
      <AppDetailsListItem :detailsString="details.RecipientFullNameEW"
        >ПІБ:
      </AppDetailsListItem>
      <AppDetailsListItem :detailsString="details.PhoneRecipient"
        >Номер:
      </AppDetailsListItem>
    </ul>
  </div>
</template>

<style scoped></style>
