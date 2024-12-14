<script setup lang="ts">
import { ref } from 'vue';
import { FetchInfoProps } from '../api/getInfo';
import AppSpinner from './App-Spinner.vue';
import AppInput from './App-Input.vue';

defineProps<{
  setInfoData: ({
    documentNumber,
    phoneNumber,
  }: FetchInfoProps) => Promise<void>;
  isLoading: boolean;
}>();

const documentNumber = ref('');
const phoneNumber = ref('');

const setDocumentNumber = (value: string) => {
  documentNumber.value = value;
};

const setPhoneNumber = (value: string) => {
  phoneNumber.value = value;
};
</script>

<template>
  <form class="form">
    <AppInput
      @inputValue="setDocumentNumber"
      placeholder="20 9999 9999 9999 9999"
      id="documentNumber"
      mask="## #### #### #### ####"
      >* Номер ТТН</AppInput
    >
    <AppInput
      @inputValue="setPhoneNumber"
      placeholder="38 099 999 99 99"
      id="phoneNumber"
      mask="## ### ### ## ##"
      >Номер телефону відправника/одержувача</AppInput
    >
    <p>* обов'язкове поле</p>
    <button
      class="button"
      type="button"
      @click="setInfoData({ documentNumber, phoneNumber })"
    >
      <AppSpinner v-if="isLoading" />
      <span v-if="!isLoading">Пошук</span>
    </button>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.button {
  height: 32px;
  background-color: rgb(236, 65, 59);
  border: none;
  border-radius: 4px;
  color: rgb(250, 250, 250);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
