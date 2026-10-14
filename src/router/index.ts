import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Landing.vue'
import Landing from '../views/Landing.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    }
  ],
})

export default router
