<script setup lang="ts">
import { ref } from 'vue';
import { FetchInfoProps } from '../api/getInfo';
import AppInput from './shared/App-Input.vue';
import AppButton from './shared/App-Button.vue';

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
      placeholder="20 9999 9999 9999"
      id="documentNumber"
      mask="## #### #### ####"
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
    <AppButton
      :isLoading="isLoading"
      @click="setInfoData({ documentNumber, phoneNumber })"
      >Пошук</AppButton
    >
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
