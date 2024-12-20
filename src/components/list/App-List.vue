<script setup lang="ts">
import { ref } from 'vue';
import AppForm from '../shared/App-Form.vue';
import AppListItem from './App-ListItem.vue';
import AppButton from '../shared/App-Button.vue';
import { FetchInfoProps, getInfo } from '../../api/getInfo';
import { toast } from 'vue3-toastify';

const info = ref<TrackingDocument | null>(null);
const isLoading = ref(false);
const isFormShown = ref(false);

const storedParcels = localStorage.getItem('parcels');
const parcelsToArray = ref(storedParcels ? JSON.parse(storedParcels) : []);

const showForm = () => {
  isFormShown.value = !isFormShown.value;
};

const setInfoData = async ({ documentNumber }: FetchInfoProps) => {
  try {
    isLoading.value = true;
    const data = await getInfo({
      documentNumber,
    });
    if (data) {
      // info.value = data;
      const storedParcels = localStorage.getItem('parcels');
      console.log('storedParcels', storedParcels);

      const parcelsToArray = storedParcels ? JSON.parse(storedParcels) : [];
      const newObject = {
        number: data.Number,
        status: data.Status,
      };
      console.log('parcelsToArray', parcelsToArray);

      parcelsToArray.push(newObject);
      console.log('modifiedParcelsArray', parcelsToArray);

      console.log('parcelsToArray', parcelsToArray);

      localStorage.setItem('parcels', JSON.stringify(parcelsToArray));
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
      v-for="parcel in parcelsToArray"
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
    <AppButton icon="pi-sync">
      Оновити
      <i
        class="pi pi-sync"
        :class="isFormShown ? 'rotate' : ''"
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
