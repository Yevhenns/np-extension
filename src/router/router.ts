import { createWebHistory, createRouter } from 'vue-router';

const HomePage = () => import('@/pages/Home-Page.vue');
const DetailsPage = () => import('@/pages/Details-Page.vue');
const SettingsPage = () => import('@/pages/Settings-Page.vue');
const InfoPage = () => import('@/pages/Info-Page.vue');

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/details',
    component: DetailsPage,
  },
  {
    path: '/settings',
    component: SettingsPage,
  },
  {
    path: '/info',
    component: InfoPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
