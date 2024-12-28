<script setup lang="ts">
import { useColorMode, useLocalStorage } from '@vueuse/core';
import AppContainer from '@/components/layout/App-Container.vue';
import AppButton from '@/components/shared/App-Button.vue';
import AppInput from '@/components/shared/App-Input.vue';
import AppToggleSwitch from '@/components/shared/App-ToggleSwitch.vue';
import { useSettingsStore } from '@/store/settings';
import { playSound } from '@/helpers/playSound';

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
  disableTransition: false,
});

const clickThemeButton = (theme: 'auto' | 'light' | 'dark') => {
  playSound('click');
  colorMode.value = theme;
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
        <span>Тема</span>
        <div class="theme-buttons">
          <AppButton
            :class="currentTheme === 'dark' ? 'active' : ''"
            @click="clickThemeButton('dark')"
            >Темна</AppButton
          >
          <AppButton
            :class="currentTheme === 'auto' ? 'active' : ''"
            @click="clickThemeButton('auto')"
            >Авто</AppButton
          >
          <AppButton
            :class="currentTheme === 'light' ? 'active' : ''"
            @click="clickThemeButton('light')"
            >Світла</AppButton
          >
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
  border-bottom: var(--secondary-border);
  padding: 10px 0;
}

.theme-buttons {
  display: flex;
  gap: 8px;
}

.active {
  border: var(--button-border-acive);
  transition: var(--transition);
}
</style>
