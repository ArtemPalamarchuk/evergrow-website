import {createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/About.vue'),
      meta: {
        title: 'About'
      }
    },
    {
      path: '/taxes',
      name: 'taxes',
      component: () => import('../pages/Taxes.vue'),
      meta: {
        title: 'Corporate tax & treasury'
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
