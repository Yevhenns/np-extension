<script setup lang="ts">
import AppContainer from '@/components/layout/App-Container.vue';
import AppToggleSwitch from '@/components/shared/App-ToggleSwitch.vue';
import { useSettingsStore } from '@/store/settings';

const store = useSettingsStore();

const onInputChange = (value: boolean) => {
  store.toggleIsSoundOn(value);
};
</script>

<template>
  <div>
    <AppContainer>
      <h3>Налаштування</h3>
      <div class="switch-wrapper">
        <span>Звук</span>
        <AppToggleSwitch
          @switchValue="onInputChange"
          :switchValue="store.isSoundOn"
        />
      </div>
    </AppContainer>
  </div>
</template>

<style scoped>
.switch-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
