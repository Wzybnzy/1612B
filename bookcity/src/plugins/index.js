export default {
    install(Vue,options){//install()封装插件，第一个参数是Vue构造器,第二个参数是在注册插件的时候传递过来的
        // console.log(options);
        Vue.component('myHeader', ()=>import('@/components/my-header')); //运行时加载
        Vue.component('Search', ()=>import('@/components/search')); //运行时加载
        Vue.component('myList', ()=>import('@/components/my-list')); //运行时加载
    }
}