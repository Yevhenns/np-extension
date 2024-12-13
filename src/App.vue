<script setup lang="ts">
import { ref } from 'vue';
import { FetchInfoProps, getInfo } from './api/getInfo';
import AppForm from './components/App-Form.vue';
import AppInfoList from './components/App-InfoList.vue';
import AppHeader from './components/App-Header.vue';
import 'vue3-toastify/dist/index.css';
import { toast } from 'vue3-toastify';

const info = ref<TrackingDocument | null>(null);

const setInfoData = async ({ documentNumber, phoneNumber }: FetchInfoProps) => {
  try {
    const data = await getInfo({
      documentNumber,
      phoneNumber,
    });
    if (data) {
      info.value = data;
    }
  } catch (e) {
    console.log(e);
    toast.error(e, {
      autoClose: 2000,
    });
  }
};
</script>

<template>
  <div class="app">
    <AppHeader />
    <AppForm :setInfoData="setInfoData" />
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
