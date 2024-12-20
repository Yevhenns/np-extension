<script setup lang="ts">
import { ref } from 'vue';
import { FetchInfoProps, getInfo } from '../api/getInfo';
import AppForm from '../components/info/App-Form.vue';
import AppInfo from '../components/info/App-Info.vue';
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
    toast.error(e, {
      autoClose: 2000,
    });
    isLoading.value = false;
    info.value = null;
  }
};
</script>

<template>
  <div class="page">
    <AppForm :setInfoData="setInfoData" :isLoading="isLoading" />
    <AppInfo :info="info" v-if="info" />
  </div>
</template>

<style scoped>
.page {
  padding: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
