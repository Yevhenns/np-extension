import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import { pinia } from './store';
import './assets/styles/style.css';

createApp(App).use(pinia).use(router).mount('#app');
