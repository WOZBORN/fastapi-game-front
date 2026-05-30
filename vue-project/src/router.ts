import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Leaderboard from './components/Leaderboard.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: () => localStorage.getItem('username') ? '/leaderboard' : '/login' },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/leaderboard', component: Leaderboard },
  ],
})

router.beforeEach((to) => {
  const loggedIn = !!localStorage.getItem('username')
  if (loggedIn && (to.path === '/login' || to.path === '/register')) {
    return '/leaderboard'
  }
})

export default router
