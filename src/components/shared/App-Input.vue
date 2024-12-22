<script setup lang="ts">
import { ref, watch } from 'vue';
import { vMaska } from 'maska/vue';
import AppDeleteButton from './App-DeleteButton.vue';
import { resetCurrentNumberLS } from '../../helpers/currentNumberStorageActions';

const props = defineProps<{
  placeholder: string;
  id: string;
  mask: string;
  errorMessage?: string;
  documentNumberFromLS?: string;
}>();

watch(
  () => props.documentNumberFromLS,
  newValue => {
    if (newValue && newValue.length > 0) {
      unmaskedValue.value = newValue;
      maskedValue.value = newValue;
    }
  }
);

const emit = defineEmits(['inputValue']);

const unmaskedValue = ref('');
const maskedValue = ref('');

const clearValue = () => {
  unmaskedValue.value = '';
  maskedValue.value = '';
  emit('inputValue', unmaskedValue.value);
  if (props.documentNumberFromLS && props.documentNumberFromLS.length > 0) {
    resetCurrentNumberLS();
  }
};

const onInputChange = () => {
  emit('inputValue', unmaskedValue.value);
};

defineExpose({ unmaskedValue });
</script>

<template>
  <label>
    <slot></slot>
    <div class="input-wrapper">
      <input
        :id="id"
        :placeholder="placeholder"
        @input="onInputChange"
        class="input"
        v-maska:unmaskedValue.unmasked="mask"
        v-model="maskedValue"
      />
      <AppDeleteButton @click="clearValue" />
    </div>
    <div class="error">
      <span>{{ errorMessage }}</span>
    </div>
  </label>
</template>

<style scoped>
@import '../../variables.css';

.input-wrapper {
  position: relative;
}

.input {
  height: 32px;
  font-size: 20px;
  border-radius: 4px;
  border: var(--main-border);
  outline: none;
  padding-left: 8px;
  padding-right: 30px;
  width: 100%;
  transition: var(--transition);
}

.input:hover {
  box-shadow: var(--box-shadow);
}

.input:focus {
  box-shadow: var(--box-shadow-active);
}

.error {
  color: rgb(236, 65, 59);
  height: 20px;
}
</style>
