<script setup lang="ts">
import { useRouter } from 'vue-router';
import AppDeleteButton from '../shared/App-DeleteButton.vue';

const props = defineProps<{
  number: string;
  status: string;
  deleteItemFromLS: (number: string) => void;
}>();

const router = useRouter();

const setParcelNumberToInput = () => {
  localStorage.setItem('currentNumber', JSON.stringify(props.number));
  router.push('/details');
};
</script>

<template>
  <div @click="setParcelNumberToInput" class="wrapper">
    <p>{{ number }}</p>
    <p>{{ status }}</p>
    <AppDeleteButton @click.stop="deleteItemFromLS(number)" />
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  border: var(--secondary-border);
  text-align: left;
  padding-right: 30px;
  padding-left: 6px;
  border-radius: 4px;
  cursor: pointer;
  transition: var(--transition);
}

.wrapper:hover {
  box-shadow: var(--box-shadow);
}
</style>
