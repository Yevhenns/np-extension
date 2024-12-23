<script setup lang="ts">
import AppContainer from '../components/layout/App-Container.vue';
</script>

<template>
  <div class="page">
    <AppContainer>
      <p>Застосунок для пошуку інформації про відправлення Нової Пошти.</p>
      <p>
        Використовується
        <a
          class="np-link"
          href="https://developers.novaposhta.ua/"
          target="_blank"
          rel="noopener noreferrer"
          >АРI компанії «Нова пошта»</a
        >.
      </p>
    </AppContainer>
  </div>
</template>

<style scoped>
.page {
  text-align: left;
}

.np-link {
  text-decoration: underline;
  color: var(--main-color);
}
</style>
