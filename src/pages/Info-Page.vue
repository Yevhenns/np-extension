<script setup lang="ts">
import AppContainer from '@/components/layout/App-Container.vue';
</script>

<template>
  <div>
    <AppContainer>
      <h3>Інформація</h3>
      <ul class="text-wrapper">
        <li>
          <p>Застосунок для пошуку інформації про відправлення Нової Пошти.</p>
        </li>
        <li>
          <p>
            На сторінці "Налаштування" є можливість керування звуком і введення
            особистого API ключа.
          </p>
        </li>
        <li>
          <p>
            Всі дані введені користувачем зберігаються лише в local storage,
            та/або відправляються напряму на
            <a
              class="np-link"
              href="https://developers.novaposhta.ua/"
              target="_blank"
              rel="noopener noreferrer"
              >АРI компанії «Нова пошта»</a
            >
            для отримання актуальної інформації.
          </p>
        </li>
      </ul>
    </AppContainer>
  </div>
</template>

<style scoped>
.text-wrapper {
  text-align: left;
}

.np-link {
  text-decoration: underline;
  color: var(--main-color);
}
</style>
