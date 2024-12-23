<script setup lang="ts">
import { ref, watch } from 'vue';
import { FetchInfoProps } from '../../api/getInfo';
import AppInput from '../shared/App-Input.vue';
import AppButton from '../shared/App-Button.vue';
import { useParcelsStore } from '../../store/parcels';

defineProps<{
  setDetailsData: ({
    documentNumber,
    phoneNumber,
  }: FetchInfoProps) => Promise<void>;
  showPhone: boolean;
  saveNumber: boolean;
}>();

const store = useParcelsStore();

const documentNumber = ref('');
const phoneNumber = ref('');
const isValid = ref(false);

const documentNumberLength = 14;
const phoneNumberLength = 12;

const setDocumentNumber = (value: string) => {
  documentNumber.value = value;
  store.setCurrentParcelNumber(value);
};

const setPhoneNumber = (value: string) => {
  phoneNumber.value = value;
  store.setCurrentPhoneNumber(value);
};

const setIsValid = () => {
  isValid.value = documentNumber.value.length === documentNumberLength;
};

watch(documentNumber, setIsValid);
</script>

<template>
  <form class="form">
    <AppInput
      :saveNumber="saveNumber"
      :currentdocumentNumber="store.currentParcelNumber"
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
      v-if="showPhone"
      :saveNumber="saveNumber"
      :currentdocumentNumber="store.currentPhoneNumber"
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
    <p v-if="showPhone">
      Для отримання додаткової інформації введіть номер телефону
      відправника/одержувача.
    </p>
    <AppButton
      :disabled="!isValid"
      :isLoading="store.isLoading"
      @click="setDetailsData({ documentNumber, phoneNumber })"
      >Пошук</AppButton
    >
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
}
</style>
