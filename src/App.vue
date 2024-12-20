<script setup lang="ts">
import AppHeader from './components/layout/App-Header.vue';

import 'vue3-toastify/dist/index.css';
</script>

<template>
  <div class>
    <AppHeader />
    <router-view></router-view>
  </div>
</template>
