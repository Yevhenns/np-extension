<script setup lang="ts">
import { RouterLink } from 'vue-router';
import AppContainer from './App-Container.vue';
import { playSound } from '@/helpers/playSound';

const playClickSound = () => {
  playSound('click');
};
</script>

<template>
  <header class="header">
    <AppContainer :style="{ paddingBottom: '0' }">
      <div class="header-heading">
        <RouterLink
          to="/"
          @click="playClickSound"
          aria-label="link to main mage"
        >
          <img src="/logo.png" alt="logo" width="32" height="32" />
        </RouterLink>
        <h3>Трекінг посилок НП</h3>
        <div class="info-settings-wrapper">
          <RouterLink
            to="/info"
            @click="playClickSound"
            class="info-settings-link"
            active-class="active"
            aria-label="link to info mage"
          >
            <i class="pi pi-info-circle" style="font-size: 24px"></i>
          </RouterLink>
          <RouterLink
            to="/settings"
            @click="playClickSound"
            class="info-settings-link"
            active-class="active"
            aria-label="link to settings mage"
          >
            <i class="pi pi-cog" style="font-size: 24px"></i>
          </RouterLink>
        </div>
      </div>
      <div class="header-nav">
        <RouterLink
          to="/"
          @click="playClickSound"
          class="nav-link"
          active-class="active"
          aria-label="link to main mage"
          >Список посилок</RouterLink
        >
        <RouterLink
          class="nav-link"
          @click="playClickSound"
          active-class="active"
          to="/details"
          >Про посилку</RouterLink
        >
      </div>
    </AppContainer>
  </header>
</template>

<style scoped>
.header {
  border-bottom: var(--secondary-border);

  .header-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .info-settings-wrapper {
    display: flex;
    gap: 16px;
  }

  .header-nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .info-settings-link {
    border-radius: 50%;
    height: auto;
    display: flex;
    transition: var(--transition);

    &:hover {
      box-shadow: var(--box-shadow);
    }

    &.active {
      color: var(--main-color);
    }
  }

  .nav-link {
    width: 50%;
    display: inline-block;
    padding: 8px;
    transition: var(--transition);
    font-size: 14px;

    &:hover {
      box-shadow: var(--box-shadow);
    }

    &.active {
      color: var(--main-bg);
      background-color: var(--main-color);
    }
  }
}
</style>
