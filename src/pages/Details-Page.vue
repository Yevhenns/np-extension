<script setup lang="ts">
import AppContainer from '@/components/layout/App-Container.vue';
import AppForm from '@/components/shared/App-Form.vue';
import AppDetails from '@/components/details/App-Details.vue';
import { useParcelsStore } from '@/store/parcels.ts';
import { getDetails } from '@/api/details.ts';
import { playSound } from '@/helpers/playSound';
import { toast } from 'vue3-toastify';

const store = useParcelsStore();

const checkIsNumberInList = () => {
  if (
    store.parcelsArray.some(item => item.number === store.currentParcelNumber)
  ) {
    return true;
  }
  if (store.isLimit) {
    playSound('error');
    toast.warn('Ви досягли ліміту в списку посилок', {
      autoClose: 2000,
    });
    return true;
  }
  return false;
};

const addParcelTolist = (data: TrackingDocument) => {
  if (checkIsNumberInList()) return;

  const newObject: ParcelShortInfo = {
    number: data.Number,
    status: data.Status,
  };
  store.addParcel(newObject);
};

const setDetailsData = async ({
  documentNumber,
  phoneNumber,
}: GetDetailsProps) => {
  playSound('click');

  try {
    store.setIsLoading(true);
    const data = await getDetails({
      documentNumber,
      phoneNumber,
    });
    if (data) {
      store.setDetails(data);
      addParcelTolist(data);
    }
    store.setIsLoading(false);
  } catch (e) {
    playSound('error');
    toast.error(e, {
      autoClose: 2000,
    });
    store.setIsLoading(false);
    store.setDetails(null);
  }
};
</script>

<template>
  <div class="page">
    <AppContainer>
      <AppForm :saveNumber="true" :setDetailsData="setDetailsData" showPhone />
      <AppDetails :details="store.details" v-if="store.details" />
    </AppContainer>
  </div>
</template>

<style scoped>
.page {
  text-align: left;
}
</style>
