import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const Home = () => import('@/views/home');
const Answer = () => import('@/views/answer');
const Last = () => import('@/views/last');
const List = () => import('@/views/list');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      path: '/answer',
      name: 'answer',
      component: Answer
    },
   
    {
      path: '/last',
      name: 'last',
      component: Last
    },{
      path: '/list/:type',
      name: 'list',
      component: List
    }
  ]
})
