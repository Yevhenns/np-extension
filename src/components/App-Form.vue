<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ submitForm: () => Promise<void> }>();

const parcelNumber = ref('');
const phoneNumber = ref('');
</script>

<template>
  <form class="form">
    <p>Номер посилки: {{ parcelNumber }}</p>
    <p>Номер телефону: {{ phoneNumber }}</p>
    <input class="input" v-model="parcelNumber" />
    <input class="input" v-model="phoneNumber" />
    <button type="button" @click="submitForm">Пошук</button>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.input {
  height: 32px;
  font-size: 20px;
}
</style>
