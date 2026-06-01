import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserCreate from '@/views/UserCreate.vue'
import MovieData from '@/views/MovieData.vue'

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
     path: '/movies',
     name: 'MovieData',
     component: MovieData,
      },
  ],
})

export default router
