<script setup lang="ts">
import { onMounted } from 'vue';
import { useColorMode } from '@vueuse/core';
import AppHeader from '@/components/layout/App-Header.vue';
import { useSettingsStore } from '@/store/settings';
import { useParcelsStore } from './store/parcels';
import dayjs from 'dayjs';
import 'vue3-toastify/dist/index.css';
import 'primeicons/primeicons.css';

const settingsStore = useSettingsStore();
const parcelsStore = useParcelsStore();

const dateToday = dayjs();
const lastDate = dayjs(settingsStore.lastDate);

const difference = dateToday.diff(lastDate, 'day');

const lastDateHandler = () => {
  if (settingsStore.lastDate.length === 0) {
    settingsStore.resetAll();
    parcelsStore.resetAll();
    settingsStore.setLastDay(dateToday.toISOString());
  }
  if (settingsStore.lastDate.length !== 0 && difference < 1) {
    settingsStore.setLastDay(dateToday.toISOString());
  }
  if (settingsStore.lastDate.length !== 0 && difference >= 1) {
    settingsStore.resetAll();
    parcelsStore.resetAll();
    settingsStore.setLastDay(dateToday.toISOString());
  }
};

onMounted(() => {
  lastDateHandler();
  useColorMode({
    modes: {
      auto: 'auto',
      light: 'light',
      dark: 'dark',
    },
    attribute: 'theme',
  });
});
</script>

<template>
  <div>
    <AppHeader />
    <router-view></router-view>
  </div>
</template>
