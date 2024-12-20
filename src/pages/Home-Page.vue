<script setup lang="ts">
import { toast } from 'vue3-toastify';
import AppList from '../components/list/App-List.vue';
import { onMounted, ref } from 'vue';
import { FetchInfoProps, getInfo } from '../api/getInfo';
import AppForm from '../components/shared/App-Form.vue';

export interface NewItem {
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
  <div class="page">
    <AppList
      :getParcelsFromLS="getParcelsFromLS"
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
  </div>
</template>

<style scoped>
@import '../variables.css';

.page {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

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
