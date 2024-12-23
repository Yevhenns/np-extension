<script setup lang="ts">
import { resetParcels } from '../../helpers/parcelsStorageActions';
import AppButton from '../shared/App-Button.vue';

const props = defineProps<{
  toggleModal: () => void;
}>();

const deleteAllParcels = () => {
  resetParcels();
  props.toggleModal();
};
</script>

<template>
  <div class="layout">
    <div class="modal">
      <p>Ви впевнені?</p>
      <div class="buttons-set">
        <AppButton @click="deleteAllParcels">Так</AppButton>
        <AppButton @click="toggleModal">Ні</AppButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout {
  position: absolute;
  background-color: var(--box-shadow-color);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.modal {
  width: 200px;
  padding: 24px;
  background-color: var(--main-bg);
  border-radius: 4px;
}

.buttons-set {
  margin-top: 16px;
  display: flex;
  gap: 16px;
}
</style>
