import Vue from 'vue';
import Router from 'vue-router';
// import Home from '../views/home';
// import Vedio from '../views/vedio';
// import News from '../views/news';
// import Frum from '../views/frum';
// import List from '../views/list';
// import Newest from '../views/newest';// 静态加载
// import Follow from '../views/follow';
// import Hottest from '../views/hottest';
// import Detail from '../views/detail';

const Home = () => import('../views/home'); //按需加载组件
const Vedio = () => import('../views/vedio');
const News = () => import('../views/news');
const Frum = () => import('../views/frum');
const List = () => import('../views/list');
const ChongZhi = () => import('../views/chongzhi');
const Login = () => import('../views/login');

//异步组件
// const Newest = resolve => require(['../views/newest'],resolve);

Vue.use(Router);


const routes= [
  {
    path:'/',
    name:'home',
    component: Home
  },
  {
    path:'/vedio',
    name:'vedio',
    component: Vedio
  },
  {
    path:'/news',
    name:'news',
    component: News
  },
  {
    path:'/frum',
    name:'frum',
    component: Frum
  },
  {
    path:'/list',
    name:'list',
    component: List
  },
  {
    path:'/chongzhi',
    name:'chongzhi',
    component:ChongZhi
  },
  {
    path:'/login',
    name:'login',
    component:Login
  }
]

const router =  new Router({
  routes
});

export default router;

const login = ['chongzhi','frum'];
router.beforeEach((to,from,next)=>{
  console.log(to);
  if(login.includes(to.name)){
    //验证
    let userId = window.localStorage.getItem('userId');
    if(userId){
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});