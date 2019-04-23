import Vue from 'vue';
import VueRouter from 'vue-router'; //vue插件
import Home from '../views/home';
import Discover from '../views/discover';
import Order from '../views/order';
import Profile from '../views/profile';
import Search from '../views/search';

Vue.use(VueRouter); //注册插件

// const 

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/discover',
            component:Discover
        },
        {
            path:'/order',
            component:Order
        },
        {
            path:'/profile',
            component:Profile
        },
        {
            path:'/search',
            component:Search
        }
    ]
});

