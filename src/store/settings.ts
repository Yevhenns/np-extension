import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export const useSettingsStore = defineStore('settings', () => {
  const isSoundOn = useLocalStorage<boolean>('sound', true);

  function toggleIsSoundOn(value: boolean) {
    isSoundOn.value = value;
  }

  return { isSoundOn, toggleIsSoundOn };
});
