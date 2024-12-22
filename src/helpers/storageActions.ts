import { Ref } from 'vue';

export const getParcelsFromLS = () => {
  const storedParcels = localStorage.getItem('parcels');
  return storedParcels ? (JSON.parse(storedParcels) as ParcelShortInfo[]) : [];
};

export const updateParcelsRef = (parcelsRef: Ref<ParcelShortInfo[]>) => {
  parcelsRef.value = getParcelsFromLS();
};

export const setParcelToLS = (parcelsArray: Ref<ParcelShortInfo[]>) => {
  localStorage.setItem('parcels', JSON.stringify(parcelsArray.value));
};
