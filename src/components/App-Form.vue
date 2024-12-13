<script setup lang="ts">
import AppButton from './shared/App-Button.vue';

defineProps<{ submitForm: () => Promise<void> }>();
</script>

<template>
  <form>
    <input />
    <input />
    <AppButton type="button" @click="submitForm">Пошук</AppButton>
  </form>
</template>
