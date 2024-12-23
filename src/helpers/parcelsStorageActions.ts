import { Ref } from 'vue';

export const getParcelsFromLS = () => {
  const storedParcels = localStorage.getItem('parcels');
  return storedParcels ? (JSON.parse(storedParcels) as ParcelShortInfo[]) : [];
};

export const updateParcelsRef = (parcelsRef: Ref<ParcelShortInfo[]>) => {
  parcelsRef.value = getParcelsFromLS();
};

export const setParcelRefToLS = (parcelsArray: Ref<ParcelShortInfo[]>) => {
  localStorage.setItem('parcels', JSON.stringify(parcelsArray.value));
};

export const getIsLimit = () => {
  const storedParcels = localStorage.getItem('parcels');
  const storedParcelsLength = storedParcels
    ? (JSON.parse(storedParcels) as ParcelShortInfo[]).length
    : 0;
  return storedParcelsLength >= 5 ? true : false;
};

export const resetParcels = () => {
  localStorage.setItem('parcels', JSON.stringify([]));
};
