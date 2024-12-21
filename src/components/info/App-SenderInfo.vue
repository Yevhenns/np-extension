<script setup lang="ts">
import AppInfoListItem from './App-InfoListItem.vue';

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
      <AppInfoListItem :infoString="info.CitySender">Місто: </AppInfoListItem>
      <AppInfoListItem :infoString="info.WarehouseSender"
        >Адреса:
      </AppInfoListItem>
      <AppInfoListItem :infoString="info.SenderFullNameEW"
        >ПІБ:
      </AppInfoListItem>
      <AppInfoListItem :infoString="info.PhoneSender">Номер: </AppInfoListItem>
    </ul>
  </div>
</template>
