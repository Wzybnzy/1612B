import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);

const Film = ()=> import('@/views/film');
const Cinema = ()=> import('@/views/cinema');
const Preferential = ()=> import('@/views/preferential');
const My = ()=> import('@/views/my');
const Received = ()=> import('@/views/received');
const Release = ()=> import('@/views/release');
const Detail = ()=> import('@/views/detail');

const router = new Router({
  routes:[
    {
      path:'/',
      redirect:{name:'received'}
    },
    {
      path:'/film',
      name:'film',
      component:Film,
      children:[
        {
          path:'received',
          name:'received',
          component:Received
        },
        {
          path:'release',
          name:'release',
          component:Release
        }
      ]
    },
    {
      path:'/cinema',
      name:'cinema',
      component:Cinema
    },
    {
      path:'/preferential',
      name:'preferential',
      component:Preferential
    },
    {
      path:'/my',
      name:'my',
      component:My
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:Detail
    }
  ]
})
const login = ['order1','order2']
router.beforeEach((to,from,next)=>{
     if(login.includes(to.name)){
       //判断登录
     }
});

export default router;