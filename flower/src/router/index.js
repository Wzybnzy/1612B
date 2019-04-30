import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const Home = () => import('@/views/home');
const Classify = () => import('@/views/classify');
const My = () => import('@/views/my');
const List = () => import('@/views/list');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },{
      path: '/list/:type',
      name: 'list',
      component: List
    }
  ]
})
