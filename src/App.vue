<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

const API_KEY = import.meta.env.VITE_API_KEY;

const info = ref(null);
console.log(info);

const requestBody = {
  apiKey: API_KEY,
  modelName: 'TrackingDocument',
  calledMethod: 'getStatusDocuments',
  methodProperties: {
    Documents: [
      {
        DocumentNumber: '20400391438881',
      },
    ],
  },
};
const fetchInfo = async () => {
    fetch('https://api.novaposhta.ua/v2.0/json/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    })
      .then(response => response.json())
      .then(data => info.value = data)
}
</script>

<template>
  <div>
    <button v-on:click="fetchInfo()">Fetch</button>
    <p>{{info}}</p>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
