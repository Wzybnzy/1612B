import Vue from 'vue'
import Router from 'vue-router'
import BookCity from '@/views/bookcity'
import BookShelf from '@/views/bookshelf'

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
    }
  ]
})
