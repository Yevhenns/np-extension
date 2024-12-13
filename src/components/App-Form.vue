<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ submitForm: () => Promise<void> }>();

const parcelNumber = ref('');
const phoneNumber = ref('');
</script>

<template>
  <form class="form">
    <span>Номер посилки: {{ parcelNumber }}</span>
    <span>Номер телефону: {{ phoneNumber }}</span>
    <label for="parcelNumber">* Номер</label>
    <input
      class="input"
      id="parcelNumber"
      placeholder="Номер"
      v-model="parcelNumber"
    />
    <label for="phoneNumber">Номер</label>
    <input
      class="input"
      id="phoneNumber"
      placeholder="Номер"
      v-model="phoneNumber"
    />
    <p>* обов'язкове поле</p>
    <button class="button" type="button" @click="submitForm">Пошук</button>
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
  border-radius: 4px;
  border: 2px solid rgb(236, 65, 59);
  outline: none;
  padding-left: 8px;
  padding-right: 8px;
}

.button {
  height: 32px;
  background-color: rgb(236, 65, 59);
  border: none;
  border-radius: 4px;
  color: rgb(250, 250, 250);
  cursor: pointer;
}
</style>
