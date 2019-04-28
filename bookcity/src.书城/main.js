import Vue from 'vue'
import App from './App'
import router from './router'
import plugins from './plugins' //插件
import axios from 'axios'
// import myHeader from './components/my-header'  静态加载

import 'swiper/dist/css/swiper.min.css'

import VueLazyload from 'vue-lazyload' 

Vue.config.productionTip = false
Vue.prototype.$http = axios; // vue-resource

Vue.use(plugins,{
  aa:111
});  //注册插件


Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('./assets/timg.gif'),//如果图片放在static下边，直接按着路径引入，如果放在assets下边，需要用require()引入
  attempt: 1
})
// Vue.component();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
