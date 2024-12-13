<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ submitForm: () => Promise<void> }>();

const parcelNumber = ref('');
const phoneNumber = ref('');
</script>

<template>
  <form>
    <p>Номер посилки: {{ parcelNumber }}</p>
    <p>Номер телефону: {{ phoneNumber }}</p>
    <input v-model="parcelNumber" />
    <input v-model="phoneNumber" />
    <button type="button" @click="submitForm">Пошук</button>
  </form>
</template>
