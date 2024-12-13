<script setup lang="ts">
defineProps<{ info: TrackingDocument | null }>();
</script>

<template>
  <div class="info_list">
    <h3>Інформація про посилку</h3>
    <ul>
      <li>
        <p><span class="span">Статус: </span>{{ info?.Status }}</p>
      </li>
      <li>
        <p>
          <span class="span">Назва: </span>{{ info?.CargoDescriptionString }}
        </p>
      </li>
      <li>
        <p>
          <span class="span">Спосіб оплати: </span>{{ info?.PaymentMethod }}
        </p>
      </li>
    </ul>
    <h3>Інформація про одержувача</h3>
    <ul>
      <li>
        <p><span class="span">Адреса: </span>{{ info?.WarehouseRecipient }}</p>
      </li>
      <li>
        <p><span class="span">ПІБ: </span>{{ info?.RecipientFullNameEW }}</p>
      </li>
      <li>
        <p><span class="span">Номер: </span>+{{ info?.PhoneRecipient }}</p>
      </li>
    </ul>
    <h3>Інформація про відправника</h3>
    <ul>
      <li>
        <p><span class="span">Адреса: </span>{{ info?.WarehouseSender }}</p>
      </li>
      <li>
        <p><span class="span">ПІБ: </span>{{ info?.SenderFullNameEW }}</p>
      </li>
      <li>
        <p><span class="span">Номер: </span>+{{ info?.PhoneSender }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.info_list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.span {
  font-weight: 600;
}
</style>
