import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserCreate from '@/views/UserCreate.vue'
import ShowData from '@/views/ShowData.vue'
import WriteReview from '@/views/WriteReview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/',
      name: 'start',
      component: UserCreate,
    },
    {
     path: '/shows/:id',
     name: 'shows',
     component: ShowData,
    },
     {
     path: '/reviews',
     name: 'reviews',
     component: WriteReview,
    },
  ],
})

export default router
