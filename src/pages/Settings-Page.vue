<script setup lang="ts">
import AppContainer from '@/components/layout/App-Container.vue';
import AppToggleSwitch from '@/components/shared/App-ToggleSwitch.vue';
</script>

<template>
  <div>
    <AppContainer>
      <h3>Налаштування</h3>
      <div class="switch-wrapper">
        <span>Звук</span>
        <AppToggleSwitch />
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
