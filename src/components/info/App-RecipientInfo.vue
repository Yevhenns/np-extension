<script setup lang="ts">
import AppInfoListItem from './App-InfoListItem.vue';

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
      <AppInfoListItem :infoString="info.CityRecipient"
        >Місто:
      </AppInfoListItem>
      <AppInfoListItem :infoString="info.WarehouseRecipient"
        >Адреса:
      </AppInfoListItem>
      <AppInfoListItem :infoString="info.RecipientFullNameEW"
        >ПІБ:
      </AppInfoListItem>
      <AppInfoListItem :infoString="info.PhoneRecipient"
        >Номер:
      </AppInfoListItem>
    </ul>
  </div>
</template>

<style scoped></style>
