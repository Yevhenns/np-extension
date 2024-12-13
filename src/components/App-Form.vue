<script setup lang="ts">
import { ref } from 'vue';
import { FetchInfoProps } from '../api/getInfo';

defineProps<{
  setInfoData: ({
    documentNumber,
    phoneNumber,
  }: FetchInfoProps) => Promise<void>;
}>();

const documentNumber = ref('');
const phoneNumber = ref('');
</script>

<template>
  <form class="form">
    <label for="documentNumber"
      >* Номер ТТН
      <div class="input-wrapper">
        <input
          class="input"
          id="documentNumber"
          placeholder="Номер"
          v-model="documentNumber"
        />
        <button class="button-close" type="button" @click="documentNumber = ''">
          X
        </button>
      </div></label
    >

    <label for="phoneNumber"
      >Номер телефону відправника/одержувача
      <div class="input-wrapper">
        <input
          class="input"
          id="phoneNumber"
          placeholder="Номер"
          v-model="phoneNumber"
        />
        <button class="button-close" type="button" @click="phoneNumber = ''">
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
      Пошук
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
}
</style>
