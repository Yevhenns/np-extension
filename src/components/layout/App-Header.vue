<script setup lang="ts">
import { RouterLink } from 'vue-router';
import AppContainer from './App-Container.vue';
</script>

<template>
  <header class="header">
    <AppContainer :style="{ paddingBottom: '0' }">
      <div class="header-heading">
        <RouterLink to="/">
          <img src="/logo.png" alt="logo" width="32" height="32" />
        </RouterLink>
        <h3>Трекінг посилок НП</h3>
        <RouterLink to="/info" class="info-link" active-class="active">
          <i class="pi pi-info-circle" style="font-size: 24px"></i>
        </RouterLink>
      </div>
      <div class="header-nav">
        <RouterLink class="nav-link" active-class="active" to="/"
          >Список посилок</RouterLink
        >
        <RouterLink class="nav-link" active-class="active" to="/details"
          >Про посилку</RouterLink
        >
      </div>
    </AppContainer>
  </header>
</template>

<style scoped>
.header {
  border-bottom: var(--secondary-border);
}

.header-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-link {
  border-radius: 50%;
  height: auto;
  display: flex;
  transition: var(--transition);
}

.info-link.active {
  color: var(--main-color);
}

.nav-link {
  width: 50%;
  display: inline-block;
  padding: 8px;
  transition: var(--transition);
}

.nav-link:hover,
.info-link:hover {
  box-shadow: var(--box-shadow);
}

.nav-link.active {
  color: var(--main-bg);
  background-color: var(--main-color);
}
</style>
