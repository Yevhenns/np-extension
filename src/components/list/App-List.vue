<script setup lang="ts">
import { onMounted, ref } from 'vue';
import AppForm from '../shared/App-Form.vue';
import AppListItem from './App-ListItem.vue';
import AppButton from '../shared/App-Button.vue';
import { FetchInfoProps, getInfo } from '../../api/getInfo';
import { toast } from 'vue3-toastify';

interface NewItem {
  number: string;
  status: string;
}
const info = ref<TrackingDocument | null>(null);
const parcelsArray = ref<NewItem[]>([]);
const isLoading = ref(false);
const isFormShown = ref(false);

onMounted(() => getParcelsFromLS());

const getParcelsFromLS = () => {
  const storedParcels = localStorage.getItem('parcels');
  const parcels = storedParcels ? JSON.parse(storedParcels) : [];
  parcelsArray.value = parcels as NewItem[];
};

const showForm = () => {
  isFormShown.value = !isFormShown.value;
};

const deleteItemFromLS = (number: string) => {
  const filteredArray = parcelsArray.value.filter(
    item => item.number !== number
  );
  parcelsArray.value = filteredArray;
  localStorage.setItem('parcels', JSON.stringify(parcelsArray.value));
};

const setInfoData = async ({ documentNumber }: FetchInfoProps) => {
  try {
    isLoading.value = true;
    const data = await getInfo({
      documentNumber,
    });
    if (data) {
      const newObject: NewItem = {
        number: data.Number,
        status: data.Status,
      };
      getParcelsFromLS();
      if (parcelsArray.value.some(item => item.number === newObject.number)) {
        isLoading.value = false;
        toast.error('Посилка вже у списку', {
          autoClose: 2000,
        });
        return;
      }
      parcelsArray.value.push(newObject);
      localStorage.setItem('parcels', JSON.stringify(parcelsArray.value));
    }
    isLoading.value = false;
  } catch (e) {
    toast.error(e, {
      autoClose: 2000,
    });
    isLoading.value = false;
    info.value = null;
  }
};
</script>

<template>
  <div>Список посилок</div>
  <p>Сторінка в розробці</p>

  <div class="list-wrapper">
    <AppListItem
      v-for="parcel in parcelsArray"
      :deleteItemFromLS="deleteItemFromLS"
      :key="parcel.number"
      :number="parcel.number"
      :status="parcel.status"
    />
  </div>
  <div class="buttons-set">
    <AppButton @click="showForm">
      Додати
      <i
        class="pi pi-angle-down"
        :class="isFormShown ? 'rotate' : ''"
        style="font-size: 16px"
      ></i>
    </AppButton>
    <AppButton>
      Оновити
      <i
        class="pi pi-sync"
        :class="isFormShown ? 'pi-spin' : ''"
        style="font-size: 16px"
      ></i>
    </AppButton>
  </div>
  <AppForm
    v-if="isFormShown"
    :showPhone="false"
    :setInfoData="setInfoData"
    :isLoading="isLoading"
  />
</template>

<style>
@import '../../variables.css';

.list-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.buttons-set {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.pi {
  margin-left: 6px;
}

.rotate {
  transform: rotate(180deg);
  transition: var(-transition);
}
</style>
