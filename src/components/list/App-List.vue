<script setup lang="ts">
import { computed } from 'vue';
import AppListItem from './App-ListItem.vue';
import AppButtonsSet from './App-ButtonsSet.vue';
import { useParcelsStore } from '../../store/parcels';
import { refreshStatus } from '../../api/details';
import { toast } from 'vue3-toastify';

defineProps<{
  showForm: () => void;
  isFormShown: boolean;
  checkIsEmptyListAndToggle: () => void;
}>();

const store = useParcelsStore();

const isEmptyList = () => {
  return store.parcelsArray.length === 0 ? true : false;
};

const parcelsNumbersArray = computed(() =>
  store.parcelsArray.map(({ number }) => number)
);

const refreshParelsStatus = async () => {
  if (parcelsNumbersArray.value.length === 0) {
    toast.warn('Немає що оновлювати', {
      autoClose: 2000,
    });
    return;
  }
  try {
    store.setIsLoading(true);
    const data = await refreshStatus({
      documentNumbers: parcelsNumbersArray.value,
    });
    if (data) {
      const newArray = data.map(({ Number, Status }) => ({
        number: Number,
        status: Status,
      }));
      store.updateParcels(newArray);
      toast.success('Статуси успішно оновлено', {
        autoClose: 2000,
      });
      store.setIsLoading(false);
    }
  } catch (e) {
    toast.error(e, {
      autoClose: 2000,
    });
    store.setIsLoading(false);
  }
};
</script>

<template>
  <p v-if="!isEmptyList()">Список посилок</p>
  <p v-if="isEmptyList()">Список порожній</p>
  <p v-if="store.isLimit" class="limit-text">Ліміт збереження досягнуто</p>
  <p v-if="store.isLimit" class="limit-text">
    Видаліть зайве, щоб мати можливість зберігати посилки
  </p>
  <div class="list-wrapper">
    <AppListItem
      v-for="parcel in store.parcelsArray"
      :key="parcel.number"
      :number="parcel.number"
      :status="parcel.status"
    />
  </div>
  <AppButtonsSet
    :checkIsEmptyListAndToggle="checkIsEmptyListAndToggle"
    :showForm="showForm"
    :isFormShown="isFormShown"
    :refreshParelsStatus="refreshParelsStatus"
  />
</template>

<style scoped>
.list-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.limit-text {
  color: var(--main-color);
}
</style>
