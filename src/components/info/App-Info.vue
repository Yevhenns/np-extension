<script setup lang="ts">
import AppInfoListItem from './App-InfoListItem.vue';

defineProps<{ info: TrackingDocument }>();
</script>

<template>
  <div class="info">
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
        <AppInfoListItem :infoString="info.PhoneSender"
          >Номер:
        </AppInfoListItem>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
