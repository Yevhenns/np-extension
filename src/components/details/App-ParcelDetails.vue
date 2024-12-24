<script setup lang="ts">
import AppDetailsListItem from './App-DetailsListItem.vue';

const props = defineProps<{ details: TrackingDocument }>();

const formattedDateCreated = () => props.details.DateCreated.replace(' ', ', ');
const cutActualDeliveryDate = () => props.details.ActualDeliveryDate.split(' ');
const reversedActualDeliveryDate = () =>
  cutActualDeliveryDate()[0].split('-').reverse().join('-') +
  ', ' +
  cutActualDeliveryDate()[1];
</script>

<template>
  <div
    v-if="
      details.Status ||
      details.CargoDescriptionString ||
      details.PaymentMethod ||
      details.DateCreated ||
      details.ActualDeliveryDate
    "
  >
    <h3>Інформація про посилку</h3>
    <ul>
      <AppDetailsListItem :detailsString="details.Status"
        >Статус:
      </AppDetailsListItem>
      <AppDetailsListItem :detailsString="details.CargoDescriptionString"
        >Назва:
      </AppDetailsListItem>
      <AppDetailsListItem :detailsString="details.PaymentMethod"
        >Спосіб оплати:
      </AppDetailsListItem>
      <AppDetailsListItem
        v-if="details.DateCreated"
        :detailsString="formattedDateCreated()"
        >Створено:
      </AppDetailsListItem>
      <AppDetailsListItem
        v-if="details.ActualDeliveryDate"
        :detailsString="reversedActualDeliveryDate()"
        >Доставлено:
      </AppDetailsListItem>
    </ul>
  </div>
</template>

<style scoped></style>
