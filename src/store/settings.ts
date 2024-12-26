import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export const useSettingsStore = defineStore('settings', () => {
  const isSoundOn = useLocalStorage<boolean>('sound', true);
  const API_KEY = useLocalStorage<string>('API_KEY', '');

  function toggleIsSoundOn(value: boolean) {
    isSoundOn.value = value;
  }

  function setApiKey(value: string) {
    API_KEY.value = value;
  }

  return { isSoundOn, API_KEY, toggleIsSoundOn, setApiKey };
});
