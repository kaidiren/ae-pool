import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/blockStatus',
      name: 'blockStatus',
      component: () => import('./views/BlockStatus.vue')
    },
    {
      path: '/minerStatus',
      name: 'minerStatus',
      component: () => import('./views/MinerStatus.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('./views/FAQ.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})
