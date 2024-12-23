import { createWebHistory, createRouter } from 'vue-router';

import HomePage from '../pages/Home-Page.vue';
import DetailsPage from '../pages/Details-Page.vue';

const routes = [
  { path: '/', component: HomePage },
  {
    path: '/details',
    component: DetailsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
