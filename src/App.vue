<script setup lang="ts">
import { ref } from 'vue';
import { FetchInfoProps, getInfo } from './api/getInfo';
import AppHeader from './components/App-Header.vue';
import AppForm from './components/App-Form.vue';
import AppInfo from './components/App-Info.vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

// eslint-disable-next-line no-undef
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
    <AppInfo :info="info" v-if="info" />
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
