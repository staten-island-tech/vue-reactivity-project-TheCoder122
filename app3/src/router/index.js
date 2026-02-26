import { createRouter, createWebHistory } from 'vue-router'
import Forge from '@/views/forge.vue'

const routes = [
  {
    path: '/',
    name: 'forge',
    component: Forge,
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
export default router
