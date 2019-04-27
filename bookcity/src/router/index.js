import Vue from 'vue'
import Router from 'vue-router'
// import BookCity from '@/views/bookcity'
// import BookShelf from '@/views/bookshelf'

const BookCity = () => import('@/views/bookcity');
const BookShelf = () => import('@/views/bookshelf');
const Search = () => import('@/views/search');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/bookcity'
    },
    {
      path:'/bookcity',
      name:'bookcity',
      component: BookCity
    },
    {
      path:'/bookshelf',
      name:'bookshelf',
      component: BookShelf
    },
    {
      path:'/search',
      name:'search',
      component:Search
    }
  ]
})
