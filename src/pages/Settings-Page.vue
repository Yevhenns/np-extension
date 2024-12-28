<script setup lang="ts">
import AppContainer from '@/components/layout/App-Container.vue';
import AppButton from '@/components/shared/App-Button.vue';
import AppInput from '@/components/shared/App-Input.vue';
import AppToggleSwitch from '@/components/shared/App-ToggleSwitch.vue';
import { useSettingsStore } from '@/store/settings';
import { useColorMode, useLocalStorage } from '@vueuse/core';

const store = useSettingsStore();

const currentTheme = useLocalStorage('vueuse-color-scheme', 'auto');

const onInputChange = (value: boolean) => {
  store.toggleIsSoundOn(value);
};

const setApiKey = (value: string) => {
  store.setApiKey(value);
};

const colorMode = useColorMode({
  modes: {
    auto: 'auto',
    light: 'light',
    dark: 'dark',
  },
  attribute: 'theme',
});

const formattedTheme = () => {
  if (currentTheme.value === 'auto') {
    return 'Авто';
  }
  if (currentTheme.value === 'light') {
    return 'Світла';
  }
  if (currentTheme.value === 'dark') {
    return 'Темна';
  }
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
      <div class="switch-wrapper">
        <span>Тема: {{ formattedTheme() }}</span>
        <div class="theme-buttons">
          <AppButton @click="colorMode = 'dark'">Темна</AppButton>
          <AppButton @click="colorMode = 'auto'">Авто</AppButton>
          <AppButton @click="colorMode = 'light'">Світла</AppButton>
        </div>
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

.theme-buttons {
  display: flex;
  gap: 8px;
}
</style>
