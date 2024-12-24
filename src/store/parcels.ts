import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export const useParcelsStore = defineStore('parcel', () => {
  const details = ref<TrackingDocument | null>(null);
  const parcelsArray = useLocalStorage<ParcelShortInfo[]>('parcels', []);
  const isLimit = ref(false);
  const isLoading = ref(false);
  const currentParcelNumber = useLocalStorage('parcelNumber', '');
  const currentPhoneNumber = useLocalStorage('phoneNumber', '');

  function setDetails(value: TrackingDocument | null) {
    details.value = value;
  }

  function addParcel(newParcel: ParcelShortInfo) {
    parcelsArray.value.push(newParcel);
    setIsLimit();
  }

  function removeParcel(number: string) {
    parcelsArray.value = parcelsArray.value.filter(
      item => item.number !== number
    );
    setIsLimit();
  }

  function removeAllParcel() {
    parcelsArray.value = [];
    setIsLimit();
  }

  function updateParcels(parcels: ParcelShortInfo[]) {
    parcelsArray.value = parcels;
  }

  function setIsLimit() {
    isLimit.value = parcelsArray.value.length >= 5;
  }

  function setIsLoading(value: boolean) {
    isLoading.value = value;
  }

  function setCurrentParcelNumber(number: string) {
    currentParcelNumber.value = number;
  }

  function deleteCurrentParcelNumber() {
    currentParcelNumber.value = '';
  }

  function setCurrentPhoneNumber(number: string) {
    currentPhoneNumber.value = number;
  }

  function deleteCurrentPhoneNumber() {
    currentPhoneNumber.value = '';
  }

  return {
    details,
    parcelsArray,
    isLimit,
    isLoading,
    currentParcelNumber,
    currentPhoneNumber,
    setDetails,
    addParcel,
    removeParcel,
    removeAllParcel,
    updateParcels,
    setIsLoading,
    setCurrentParcelNumber,
    deleteCurrentParcelNumber,
    setCurrentPhoneNumber,
    deleteCurrentPhoneNumber,
  };
});
