import { createRouter, createWebHistory } from 'vue-router'
import TerminalView from '@/views/TerminalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'terminal',
      component: TerminalView,
    }
  ],
})

export default router
