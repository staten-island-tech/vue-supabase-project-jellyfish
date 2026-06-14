import { createRouter, createWebHistory } from 'vue-router'
import UserCreate from '@/views/UserCreate.vue'
import ShowData from '@/views/ShowData.vue'
import Shows from '@/views/Shows.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: UserCreate,
    },
    {
      path: '/shows',
      name: 'shows',
      component: Shows
    },
    {
     path: '/shows/:id',
     name: 'show',
     component: ShowData,
    },
  ],
})

export default router
