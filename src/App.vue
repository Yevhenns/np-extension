<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import {getInfo} from './api/getInfo'

const info = ref<TrackingDocument | null>(null);

const setInfoData = async () => {
  const data = await getInfo({ documentNumber: '20400391438881' });
  if (data) {
    info.value = data
  }
};
</script>

<template>
  <div>
    <button @click="setInfoData">Пошук</button>
    <p>{{info}}</p>    
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
</style>
