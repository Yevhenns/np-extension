<script setup lang="ts">
import AppListItem from './App-ListItem.vue';
import AppButton from '../shared/App-Button.vue';
import { NewItem } from '../../pages/Home-Page.vue';

defineProps<{
  parcelsArray: NewItem[];
  deleteItemFromLS: (number: string) => void;
  showForm: () => void;
  isFormShown: boolean;
}>();
</script>

<template>
  <div>Список посилок</div>
  <p>Сторінка в розробці</p>

  <div class="list-wrapper">
    <AppListItem
      v-for="parcel in parcelsArray"
      :deleteItemFromLS="deleteItemFromLS"
      :key="parcel.number"
      :number="parcel.number"
      :status="parcel.status"
    />
  </div>
  <div class="buttons-set">
    <AppButton @click="showForm">
      Додати
      <i
        class="pi pi-angle-down icon"
        :class="isFormShown && 'rotate'"
        style="font-size: 16px"
      ></i>
    </AppButton>
    <AppButton>
      Оновити
      <i
        class="pi pi-sync icon"
        :class="isFormShown ? 'pi-spin' : ''"
        style="font-size: 16px"
      ></i>
    </AppButton>
  </div>
</template>

<style>
@import '../../variables.css';

.list-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

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
