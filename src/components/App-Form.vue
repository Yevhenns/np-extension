<script setup lang="ts">
import { ref } from 'vue';
import { FetchInfoProps } from '../api/getInfo';
import { vMaska } from 'maska/vue';
import AppSpinner from './App-Spinner.vue';

defineProps<{
  setInfoData: ({
    documentNumber,
    phoneNumber,
  }: FetchInfoProps) => Promise<void>;
  isLoading: boolean;
}>();

const documentNumber = ref('');
const maskedDocumentNumber = ref('');

const clearDocumentNumber = () => {
  documentNumber.value = '';
  maskedDocumentNumber.value = '';
};

const phoneNumber = ref('');
const maskedPhoneNumber = ref('');

const clearPhoneNumber = () => {
  phoneNumber.value = '';
  maskedPhoneNumber.value = '';
};

defineExpose({ documentNumber, phoneNumber });
</script>

<template>
  <form class="form">
    <label for="documentNumber"
      >* Номер ТТН
      <div class="input-wrapper">
        <input
          id="documentNumber"
          class="input"
          v-maska:documentNumber.unmasked="'## #### #### #### ####'"
          v-model="maskedDocumentNumber"
          placeholder="20 9999 9999 9999 9999"
        />
        <button class="button-close" type="button" @click="clearDocumentNumber">
          X
        </button>
      </div></label
    >

    <label for="phoneNumber"
      >Номер телефону відправника/одержувача
      <div class="input-wrapper">
        <input
          id="phoneNumber"
          class="input"
          v-maska:phoneNumber.unmasked="'## ### ### ## ##'"
          v-model="maskedPhoneNumber"
          placeholder="38 099 999 99 99"
        />
        <button class="button-close" type="button" @click="clearPhoneNumber">
          X
        </button>
      </div></label
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

.input-wrapper {
  position: relative;
}

.input {
  height: 32px;
  font-size: 20px;
  border-radius: 4px;
  border: 2px solid rgb(236, 65, 59);
  outline: none;
  padding-left: 8px;
  padding-right: 30px;
  width: 100%;
}

.button-close {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
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
