<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { FetchInfoProps, getInfo } from '../api/getInfo';
import AppContainer from '../components/layout/App-Container.vue';
import AppForm from '../components/shared/App-Form.vue';
import AppDetails from '../components/details/App-Details.vue';
import {
  setParcelRefToLS,
  updateParcelsRef,
} from '../helpers/parcelsStorageActions';
import {
  setCurrentNumberLS,
  updateCurrentNumberRef,
} from '../helpers/currentNumberStorageActions';
import { useParcelsStore } from '../store/parcels.ts';
import { toast } from 'vue3-toastify';

const info = ref<TrackingDocument | null>(null);
const parcelsArray = ref<ParcelShortInfo[]>([]);
const isLoading = ref(false);
const documentNumber = ref('');
const documentNumberFromLS = ref('');

const store = useParcelsStore();

const updateParcels = () => updateParcelsRef(parcelsArray);

onMounted(() => {
  updateParcels();
  updateCurrentNumberRef(documentNumberFromLS);
  store.setIsLimit();
});

const handleDocumentNumber = (value: string) => {
  documentNumber.value = value;
};

const checkIsNumberInListOrSetToLS = (data: TrackingDocument) => {
  if (parcelsArray.value.some(item => item.number === documentNumber.value)) {
    return;
  }
  if (store.isLimit) {
    toast.warn('Ви досягли ліміту в списку посилок', {
      autoClose: 2000,
    });
    return;
  } else {
    const newObject: ParcelShortInfo = {
      number: data.Number,
      status: data.Status,
    };
    parcelsArray.value.push(newObject);
    setParcelRefToLS(parcelsArray);
  }
};

const setInfoData = async ({ documentNumber, phoneNumber }: FetchInfoProps) => {
  try {
    isLoading.value = true;
    const data = await getInfo({
      documentNumber,
      phoneNumber,
    });

    if (data) {
      info.value = data;
      checkIsNumberInListOrSetToLS(data);
      setCurrentNumberLS(documentNumber);
      store.setIsLimit();
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
    <AppContainer>
      <AppForm
        showPhone
        :documentNumberFromLS="documentNumberFromLS"
        @documentNumber="handleDocumentNumber"
        :setInfoData="setInfoData"
        :isLoading="isLoading"
      />
      <AppDetails :info="info" v-if="info" />
    </AppContainer>
  </div>
</template>

<style scoped>
.page {
  text-align: left;
}
</style>
