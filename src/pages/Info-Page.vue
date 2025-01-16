<script setup lang="ts">
import AppContainer from '@/components/layout/App-Container.vue';
</script>

<template>
  <div>
    <AppContainer>
      <h3>Інформація</h3>
      <ul class="text-wrapper">
        <li>
          <p>
            Google Chrome розширення для пошуку інформації про відправлення
            Нової Пошти.
          </p>
        </li>
        <li>
          <p>
            На сторінці "Налаштування" є можливість керування звуком, зміни теми
            і введення особистого API ключа.
          </p>
        </li>
        <li>
          <p>
            Всі дані введені користувачем зберігаються лише в local storage,
            та/або відправляються напряму через
            <a
              class="np-link"
              href="https://developers.novaposhta.ua/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="link to novaposhta API"
              >АРI компанії «Нова пошта»</a
            >
            для отримання актуальної інформації.
          </p>
        </li>
        <li>
          <p>
            Використовується автовидалення, якщо користувач не заходив в
            застосунок від 14 днів.
          </p>
        </li>
      </ul>
    </AppContainer>
  </div>
</template>

<style scoped>
.text-wrapper {
  text-align: left;

  .np-link {
    text-decoration: underline;
    color: var(--main-color);
  }
}
</style>
