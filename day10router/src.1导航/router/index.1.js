import Vue from 'vue';
import Router from 'vue-router';
// import Home from '../views/home';
// import Vedio from '../views/vedio';
// import News from '../views/news';
// import Frum from '../views/frum';
// import List from '../views/list';
import Newest from '../views/newest';// 静态加载
import Follow from '../views/follow';
import Hottest from '../views/hottest';
import Detail from '../views/detail';

const Home = () => import('../views/home'); //按需加载组件
const Vedio = () => import('../views/vedio');
const News = () => import('../views/news');
const Frum = () => import('../views/frum');
const List = () => import('../views/list');

//异步组件
// const Newest = resolve => require(['../views/newest'],resolve);

Vue.use(Router);


const routes= [
  {
    path:'/',
    name:'home',
    component: Home,
    redirect:{name:'newest'},
    children:[
      {
        path:'newest',
        name:'newest',
        component:Newest
      },
      {
        path:'follow',
        name:'follow',
        component:Follow
      },
      {
        path:'hottest',
        name:'hottest',
        component:Hottest
      }
    ]
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
    path:'/detail/:id',
    name:'detail',
    component:Detail
  }
]


export default new Router({
  routes
});