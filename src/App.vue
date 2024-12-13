<script setup lang="ts">
import { ref } from 'vue';
import { getInfo } from './api/getInfo';
import AppForm from './components/App-Form.vue';
import AppInfoList from './components/App-InfoList.vue';
import AppHeader from './components/App-Header.vue';

const info = ref<TrackingDocument | null>(null);

const setInfoData = async () => {
  const data = await getInfo({ documentNumber: '20400391438881' });
  if (data) {
    info.value = data;
  }
};
</script>

<template>
  <div class="app">
    <AppHeader />
    <AppForm :submitForm="setInfoData" />
    <AppInfoList :info="info" />
  </div>
</template>

<style scoped>
.app {
  text-align: left;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
