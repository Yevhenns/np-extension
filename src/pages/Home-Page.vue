<script setup lang="ts">
import { onMounted, ref } from 'vue';
import AppContainer from '../components/layout/App-Container.vue';
import AppList from '../components/list/App-List.vue';
import AppForm from '../components/shared/App-Form.vue';
import { FetchInfoProps, getInfo } from '../api/getInfo';
import { updateParcelsRef } from '../helpers/storageActions';
import { toast } from 'vue3-toastify';

const info = ref<TrackingDocument | null>(null);
const parcelsArray = ref<ParcelShortInfo[]>([]);
const isLoading = ref(false);
const isFormShown = ref(false);

const updateParcels = () => updateParcelsRef(parcelsArray);

onMounted(() => updateParcels());

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
      const newObject: ParcelShortInfo = {
        number: data.Number,
        status: data.Status,
      };
      updateParcelsRef(parcelsArray);
      if (parcelsArray.value.some(item => item.number === newObject.number)) {
        isLoading.value = false;
        toast.warn('Посилка вже у списку', {
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
  <div>
    <AppContainer>
      <AppList
        :updateParcels="updateParcels"
        :parcelsArray="parcelsArray"
        :deleteItemFromLS="deleteItemFromLS"
        :showForm="showForm"
        :isFormShown="isFormShown"
      />
      <div :class="isFormShown ? 'wrapper-shown' : 'wrapper-hidden'">
        <AppForm
          :class="isFormShown ? 'form-shown' : 'form-hidden'"
          :showPhone="false"
          :setInfoData="setInfoData"
          :isLoading="isLoading"
        />
      </div>
    </AppContainer>
  </div>
</template>

<style scoped>
@import '../variables.css';

.wrapper-shown {
  overflow: visible;
  transition: var(--transition);
  transform: translateY(0);
  max-height: 100%;
}

.wrapper-hidden {
  overflow: hidden;
  transition: var(--transition);
  transform: translateY(-100%);
  visibility: hidden;
  max-height: 0;
}

.form-shown {
  transition: var(--transition);
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.form-hidden {
  transition: var(--transition);
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
}
</style>
