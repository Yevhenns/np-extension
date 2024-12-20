<script setup lang="ts">
import { ref, watch } from 'vue';
import { FetchInfoProps } from '../../api/getInfo';
import AppInput from '../shared/App-Input.vue';
import AppButton from '../shared/App-Button.vue';

defineProps<{
  setInfoData: ({
    documentNumber,
    phoneNumber,
  }: FetchInfoProps) => Promise<void>;
  isLoading: boolean;
}>();

const documentNumber = ref('');
const phoneNumber = ref('');
const isValid = ref(false);

const documentNumberLength = 14;
const phoneNumberLength = 12;

const setDocumentNumber = (value: string) => {
  documentNumber.value = value;
};

const setPhoneNumber = (value: string) => {
  phoneNumber.value = value;
};

const setIsValid = () => {
  isValid.value = documentNumber.value.length === documentNumberLength;
};

watch(documentNumber, setIsValid);
</script>

<template>
  <form class="form">
    <AppInput
      @inputValue="setDocumentNumber"
      placeholder="20 9999 9999 9999"
      id="documentNumber"
      mask="## #### #### ####"
      :errorMessage="
        documentNumber.length < documentNumberLength ? 'Введіть номер ТТН' : ''
      "
      >* Номер ТТН</AppInput
    >
    <AppInput
      @inputValue="setPhoneNumber"
      placeholder="38 099 999 99 99"
      id="phoneNumber"
      mask="## ### ### ## ##"
      :errorMessage="
        phoneNumber.length > 0 && phoneNumber.length < phoneNumberLength
          ? 'Введіть номер телефону'
          : ''
      "
      >Номер телефону</AppInput
    >
    <p>* обов'язкове поле</p>
    <p>
      Для отримання додаткової інформації введіть номер телефону
      відправника/одержувача.
    </p>
    <AppButton
      :disabled="!isValid"
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
  gap: 4px;
}
</style>
