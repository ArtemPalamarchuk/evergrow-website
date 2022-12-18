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
      component: () => import('../pages/solutionPages/Taxes.vue'),
      meta: {
        title: 'Corporate tax & treasury'
      }
    },
    {
      path: '/corporate-net-zero',
      name: 'corporate-net-zero',
      component: () => import('../pages/solutionPages/Corporate.vue'),
      meta: {
        title: 'Corporate net-zero'
      }
    },
    {
      path: '/sponsors',
      name: 'sponsors',
      component: () => import('../pages/solutionPages/Sponsors.vue'),
      meta: {
        title: 'Sponsors'
      }
    },
    {
      path: '/contractors',
      name: 'contractors',
      component: () => import('../pages/solutionPages/Contractors.vue'),
      meta: {
        title: 'Contractors'
      }
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import('../pages/ContactUs.vue'),
      meta: {
        title: 'Contact Us'
      }
    },
  ],
  scrollBehavior() {
    document.getElementById('app')!.scrollIntoView({ behavior: 'auto' });
  }
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
