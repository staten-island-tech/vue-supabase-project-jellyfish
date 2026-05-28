import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserCreate from '@/views/UserCreate.vue'
import MovieData from '@/views/MovieData.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/user-create',
      name: 'user-create',
      component: UserCreate,
    },
    {
      path: '/movie/:id',
      name: 'movie-data',
      component: MovieData,
    },
  ],
})

export default router
