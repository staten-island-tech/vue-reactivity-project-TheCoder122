import { createRouter, createWebHistory } from 'vue-router'
import user from '@/views/userflip.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/userflip',
      name: 'userflip',
      component: user,
    },
  ],
})
export default router
