<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="header">
    <div class="header-heading">
      <RouterLink to="/">
        <img src="/logo.png" alt="logo" width="32" height="32" />
      </RouterLink>
      <h3>Трекінг посилок НП</h3>
    </div>
    <div class="header-nav">
      <RouterLink class="nav-link" active-class="active" to="/"
        >Список посилок</RouterLink
      >
      <RouterLink class="nav-link" active-class="active" to="/info"
        >Про посилку</RouterLink
      >
    </div>
  </header>
</template>

<style scoped>
@import '../../variables.css';

.header {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 20px 0 20px;
  border-bottom: var(--secondary-border);
}

.header-heading {
  display: flex;
  gap: 20px;
  align-items: center;
}

.header-nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-link {
  width: 50%;
  display: inline-block;
  text-decoration: none;
  padding: 8px;
  color: inherit;
  transition: var(--transition);
}

.nav-link:hover {
  box-shadow: var(--box-shadow);
}

.nav-link.active {
  color: var(--main-bg);
  background-color: var(--main-color);
}
</style>
