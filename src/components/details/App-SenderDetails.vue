<script setup lang="ts">
import AppDetailsListItem from './App-DetailsListItem.vue';

defineProps<{ info: TrackingDocument }>();
</script>

<template>
  <div
    v-if="
      info.CitySender ||
      info.WarehouseSender ||
      info.SenderFullNameEW ||
      info.PhoneSender
    "
  >
    <h3>Інформація про відправника</h3>
    <ul>
      <AppDetailsListItem :infoString="info.CitySender"
        >Місто:
      </AppDetailsListItem>
      <AppDetailsListItem :infoString="info.WarehouseSender"
        >Адреса:
      </AppDetailsListItem>
      <AppDetailsListItem :infoString="info.SenderFullNameEW"
        >ПІБ:
      </AppDetailsListItem>
      <AppDetailsListItem :infoString="info.PhoneSender"
        >Номер:
      </AppDetailsListItem>
    </ul>
  </div>
</template>

<style scoped></style>
