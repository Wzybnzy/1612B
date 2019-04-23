import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Tab from '@/views/tab'
import Home from '@/views/home'
import Discover from '@/views/discover'
import Order from '@/views/order'
import Profile from '@/views/profile'
import Search from '@/views/search'
import Shop from '@/views/shop'
import Dican from '@/views/dican'
import Comonent from '@/views/comonet'
import Bussi from '@/views/bussi'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/discover',
    name: 'discover',
    component: Discover
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  }, {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/shop/:id',
    name: 'shop',
    component: Shop,
    children: [
      {
        path: 'dican',
        name: 'dican',
        component: Dican
      },
      {
        path: 'comonent',
        name: 'comonent',
        component: Comonent
      },
      {
        path: 'bussi',
        name: 'bussi',
        component: Bussi
      }
    ]
  }

]

const router = new Router({
  mode: 'hash',
  routes
});

export default router;
