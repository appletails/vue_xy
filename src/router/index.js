import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Search from '@/page/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    }
  ]
})