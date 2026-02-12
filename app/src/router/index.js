import { createRouter, createWebHistory } from 'vue-router'
import forge from '@/views/forge.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/forge',
      name: 'forge',
      component: forge,
    },
  ],
})
export default router
