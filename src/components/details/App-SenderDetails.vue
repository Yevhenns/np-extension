<script setup lang="ts">
import AppDetailsListItem from './App-DetailsListItem.vue';

defineProps<{ details: TrackingDocument }>();
</script>

<template>
  <div
    v-if="
      details.CitySender ||
      details.WarehouseSender ||
      details.SenderFullNameEW ||
      details.PhoneSender
    "
  >
    <h3>Інформація про відправника</h3>
    <ul>
      <AppDetailsListItem :detailsString="details.CitySender"
        >Місто:
      </AppDetailsListItem>
      <AppDetailsListItem :detailsString="details.WarehouseSender"
        >Адреса:
      </AppDetailsListItem>
      <AppDetailsListItem :detailsString="details.SenderFullNameEW"
        >ПІБ:
      </AppDetailsListItem>
      <AppDetailsListItem :detailsString="details.PhoneSender"
        >Номер:
      </AppDetailsListItem>
    </ul>
  </div>
</template>

<style scoped></style>
