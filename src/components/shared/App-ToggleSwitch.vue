<script setup lang="ts">
import { playClick } from '@/helpers/playSound';
import { ref } from 'vue';

const props = defineProps<{
  id: string;
  switchValue: boolean;
}>();

const emit = defineEmits(['switchValue']);

const isChecked = ref(props.switchValue);

const onInputChange = () => {
  playClick();
  emit('switchValue', isChecked.value);
};
</script>

<template>
  <label class="switch" :for="id">
    <input
      type="checkbox"
      :id="id"
      @change="onInputChange"
      v-model="isChecked"
    />
    <span class="slider"></span>
  </label>
</template>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--disabled-bg);
    transition: var(--transition);
    border-radius: 34px;

    &:before {
      position: absolute;
      content: '';
      height: 16px;
      width: 16px;
      left: 4px;
      bottom: 4px;
      background-color: var(--main-bg);
      transition: var(--transition);
      border-radius: 50%;
    }
  }

  input:checked + .slider {
    background-color: var(--main-color);
  }

  input:checked + .slider:before {
    transform: translateX(16px);
  }
}
</style>
