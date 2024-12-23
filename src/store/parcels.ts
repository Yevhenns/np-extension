import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getIsLimit } from '../helpers/parcelsStorageActions';

export const useParcelsStore = defineStore('parcel', () => {
  const isLimit = ref(false);

  function setIsLimit() {
    isLimit.value = getIsLimit();
  }

  return { isLimit, setIsLimit };
});
