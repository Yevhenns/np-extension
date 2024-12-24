<script setup lang="ts">
import AppButton from '../shared/App-Button.vue';

defineProps<{
  showForm: () => void;
  isFormShown: boolean;
  refreshParelsStatus: () => Promise<void>;
  checkIsEmptyListAndToggle: () => void;
  isLoadingRefresh: boolean;
}>();
</script>

<template>
  <div class="buttons-set">
    <AppButton @click="showForm">
      Додати
      <i
        class="pi pi-angle-down icon"
        :class="isFormShown && 'rotate'"
        style="font-size: 16px"
      ></i>
    </AppButton>
    <AppButton @click="refreshParelsStatus">
      Оновити
      <i
        class="pi pi-sync icon"
        :class="isLoadingRefresh && 'pi-spin'"
        style="font-size: 16px"
      ></i>
    </AppButton>
    <AppButton @click="checkIsEmptyListAndToggle">
      Очистити
      <i class="pi pi-times-circle icon" style="font-size: 16px"></i>
    </AppButton>
  </div>
</template>

<style scoped>
.buttons-set {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.icon {
  margin-left: 6px;
  transform: rotate(0);
  transition: var(--transition);
}

.rotate {
  transform: rotate(180deg);
  transition: var(--transition);
}
</style>
