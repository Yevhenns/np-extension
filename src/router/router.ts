import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '@/pages/Home-Page.vue';
import DetailsPage from '@/pages/Details-Page.vue';
import InfoPage from '@/pages/Info-Page.vue';

const routes = [
  { path: '/', component: HomePage },
  {
    path: '/details',
    component: DetailsPage,
  },
  { path: '/info', component: InfoPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
