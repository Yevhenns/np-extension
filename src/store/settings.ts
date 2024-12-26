import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export const useSettingsStore = defineStore('settings', () => {
  const isSoundOn = useLocalStorage<boolean>('sound', true);
  const API_KEY = useLocalStorage<string>('API_KEY', '');
  const lastDate = useLocalStorage<string>('last-date', '');

  function toggleIsSoundOn(value: boolean) {
    isSoundOn.value = value;
  }

  function setApiKey(value: string) {
    API_KEY.value = value;
  }

  function setLastDay(date: string) {
    lastDate.value = date;
  }

  function resetAll() {
    API_KEY.value = '';
    lastDate.value = '';
  }

  return {
    isSoundOn,
    API_KEY,
    lastDate,
    toggleIsSoundOn,
    setApiKey,
    setLastDay,
    resetAll,
  };
});
