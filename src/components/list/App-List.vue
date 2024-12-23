<script setup lang="ts">
import { computed, ref } from 'vue';
import AppListItem from './App-ListItem.vue';
import AppButtonsSet from './App-ButtonsSet.vue';
import { refreshStatus } from '../../api/refreshStatus';
import { toast } from 'vue3-toastify';

const props = defineProps<{
  updateParcels: () => void;
  parcelsArray: ParcelShortInfo[];
  deleteItemFromLS: (number: string) => void;
  showForm: () => void;
  isFormShown: boolean;
  isLimit: boolean;
  checkIsEmptyListAndToggle: () => void;
}>();

const isEmptyList = () => {
  return props.parcelsArray.length === 0 ? true : false;
};

const parcelsNumbersArray = computed(() =>
  props.parcelsArray.map(({ number }) => number)
);

const isLoading = ref(false);

const refreshParelsStatus = async () => {
  if (parcelsNumbersArray.value.length === 0) {
    toast.warn('Немає що оновлювати', {
      autoClose: 2000,
    });
    return;
  }
  try {
    isLoading.value = true;
    const data = await refreshStatus({
      documentNumbers: parcelsNumbersArray.value,
    });
    if (data) {
      const newArray = data.map(({ Number, Status }) => ({
        number: Number,
        status: Status,
      }));
      localStorage.setItem('parcels', JSON.stringify(newArray));
      props.updateParcels();
      toast.success('Статуси успішно оновлено', {
        autoClose: 2000,
      });
      isLoading.value = false;
    }
  } catch (e) {
    toast.error(e, {
      autoClose: 2000,
    });
    isLoading.value = false;
  }
};
</script>

<template>
  <p v-if="!isEmptyList()">Список посилок</p>
  <p v-if="isEmptyList()">Список порожній</p>
  <p v-if="props.isLimit" class="limit-text">Ліміт збереження досягнуто</p>
  <p v-if="props.isLimit" class="limit-text">
    Видаліть зайве, щоб мати можливість зберігати посилки
  </p>
  <div class="list-wrapper">
    <AppListItem
      v-for="parcel in parcelsArray"
      :deleteItemFromLS="deleteItemFromLS"
      :key="parcel.number"
      :number="parcel.number"
      :status="parcel.status"
    />
  </div>
  <AppButtonsSet
    :checkIsEmptyListAndToggle="checkIsEmptyListAndToggle"
    :showForm="showForm"
    :isFormShown="isFormShown"
    :isLoading="isLoading"
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
