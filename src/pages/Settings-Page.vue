<script setup lang="ts">
import AppContainer from '@/components/layout/App-Container.vue';
import AppInput from '@/components/shared/App-Input.vue';
import AppToggleSwitch from '@/components/shared/App-ToggleSwitch.vue';
import { useSettingsStore } from '@/store/settings';

const store = useSettingsStore();

const onInputChange = (value: boolean) => {
  store.toggleIsSoundOn(value);
};

const setApiKey = (value: string) => {
  store.setApiKey(value);
};
</script>

<template>
  <div>
    <AppContainer>
      <h3>Налаштування</h3>
      <div class="switch-wrapper">
        <span>Звук</span>
        <AppToggleSwitch
          id="sound"
          @switchValue="onInputChange"
          :switchValue="store.isSoundOn"
        />
      </div>
      <AppInput
        @inputValue="setApiKey"
        :currentdocumentNumber="store.API_KEY"
        id="api-key"
        saveNumber
        placeholder="Введіть API KEY"
        :errorMessage="store.API_KEY.length === 0 ? 'Введіть API KEY' : ''"
        >API KEY</AppInput
      >
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
