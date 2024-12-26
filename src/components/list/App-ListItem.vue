<script setup lang="ts">
import { useRouter } from 'vue-router';
import AppDeleteButton from '../shared/App-DeleteButton.vue';
import { useParcelsStore } from '../../store/parcels';
import { playSound } from '@/helpers/playSound';

const props = defineProps<{
  number: string;
  status: string;
}>();

const router = useRouter();

const store = useParcelsStore();

const setParcelNumberToInput = () => {
  playSound('click');
  store.setCurrentParcelNumber(props.number);
  router.push('/details');
};

const deleteParcel = (number: string) => {
  playSound('click');
  store.removeParcel(number);
};
</script>

<template>
  <div @click="setParcelNumberToInput" class="wrapper">
    <p>{{ number }}</p>
    <p>{{ status }}</p>
    <AppDeleteButton @click.stop="deleteParcel(number)" />
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
