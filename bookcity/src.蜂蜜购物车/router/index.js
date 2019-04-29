import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);

const Home = ()=> import('@/views/home');
const Classify = ()=> import('@/views/classify');
const Shop = ()=> import('@/views/shop');
const My = ()=> import('@/views/my');

export default new Router({
  routes:[
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path:'/classify',
      name:'classify',
      component:Classify
    },
    {
      path:'/shop',
      name:'shop',
      component:Shop
    },
    {
      path:'/my',
      name:'my',
      component:My
    }
  ]
})