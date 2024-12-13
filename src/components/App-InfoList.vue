<script setup lang="ts">
import AppInfoListItem from './App-InfoListItem.vue';

// eslint-disable-next-line no-undef
defineProps<{ info: TrackingDocument | null }>();
</script>

<template>
  <div class="infoList">
    <div
      v-if="info?.Status || info?.CargoDescriptionString || info?.PaymentMethod"
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
        <AppInfoListItem :infoString="info.WarehouseRecipient"
          >Адреса:
        </AppInfoListItem>
        <AppInfoListItem :infoString="info.WarehouseRecipient"
          >ПІБ:
        </AppInfoListItem>
        <AppInfoListItem :infoString="info.PhoneRecipient"
          >Номер:
        </AppInfoListItem>
      </ul>
    </div>

    <div
      v-if="
        info?.WarehouseSender || info?.SenderFullNameEW || info?.PhoneSender
      "
    >
      <h3>Інформація про відправника</h3>
      <ul>
        <AppInfoListItem :infoString="info.WarehouseSender"
          >Адреса:
        </AppInfoListItem>
        <AppInfoListItem :infoString="info.SenderFullNameEW"
          >ПІБ:
        </AppInfoListItem>
        <AppInfoListItem :infoString="info.PhoneSender"
          >Номер:
        </AppInfoListItem>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.infoList {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
