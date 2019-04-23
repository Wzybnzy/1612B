import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Tab from '@/views/tab'
import Home from '@/views/home'
import Discover from '@/views/discover'
import Order from '@/views/order'
import Profile from '@/views/profile'
import Search from '@/views/search'

Vue.use(Router)

const routes= [
  {
    path:'/',
    name:'home',
    component: Home
  },
  {
    path:'/discover',
    name:'discover',
    component: Discover
  },
  {
    path:'/order',
    name:'order',
    component: Order
  }, {
    path:'/profile',
    name:'profile',
    component: Profile
  },
  {
    path:'/search',
    name:'search',
    component:Search
  }
]

const router = new Router({
  mode:'history',
  routes
});

export default router;
