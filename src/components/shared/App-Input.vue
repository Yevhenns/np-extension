<script setup lang="ts">
import { ref } from 'vue';
import { vMaska } from 'maska/vue';

defineProps<{
  placeholder: string;
  id: string;
  mask: string;
  errorMessage?: string;
}>();

const emit = defineEmits(['inputValue']);

const unmaskedValue = ref('');
const maskedValue = ref('');

const clearValue = () => {
  unmaskedValue.value = '';
  maskedValue.value = '';
  emit('inputValue', unmaskedValue.value);
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
      <button class="button-close" type="button" @click="clearValue">X</button>
    </div>
    <div class="error">
      <span>{{ errorMessage }}</span>
    </div>
  </label>
</template>

<style scoped>
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

.error {
  color: rgb(236, 65, 59);
  height: 20px;
}
</style>
