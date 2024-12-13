<script setup lang="ts">
import { ref } from 'vue';
import { FetchInfoProps, getInfo } from './api/getInfo';
import AppForm from './components/App-Form.vue';
import AppInfoList from './components/App-InfoList.vue';
import AppHeader from './components/App-Header.vue';
import 'vue3-toastify/dist/index.css';
import { toast } from 'vue3-toastify';

const info = ref<TrackingDocument | null>(null);
const isLoading = ref(false);

const setInfoData = async ({ documentNumber, phoneNumber }: FetchInfoProps) => {
  try {
    isLoading.value = true;
    const data = await getInfo({
      documentNumber,
      phoneNumber,
    });
    if (data) {
      info.value = data;
    }
    isLoading.value = false;
  } catch (e) {
    console.log(e);
    toast.error(e, {
      autoClose: 2000,
    });
    isLoading.value = false;
    info.value = null;
  }
};
</script>

<template>
  <div class="app">
    <AppHeader />
    <AppForm :setInfoData="setInfoData" :isLoading="isLoading" />
    <AppInfoList :info="info" v-if="info" />
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
