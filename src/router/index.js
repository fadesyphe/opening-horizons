import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },

    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue'),
    },

    {
      path: '/prices',
      name: 'prices',
      component: () => import('../views/PricesView.vue'),
    },

    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/PortfolioView.vue'),
    },
  ],
})

export default router
