<script setup lang="ts">
import { onMounted } from 'vue';
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
    settingsStore.setLastDay(dateToday.toISOString());
  }
  if (difference < 14) {
    settingsStore.setLastDay(dateToday.toISOString());
  }
  if (difference >= 1) {
    settingsStore.resetAll();
    parcelsStore.resetAll();
  }
};

onMounted(() => lastDateHandler());
</script>

<template>
  <div class>
    <AppHeader />
    <router-view></router-view>
  </div>
</template>
