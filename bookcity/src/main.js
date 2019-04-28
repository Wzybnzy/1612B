import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
// import myHeader from './components/my-header'  静态加载

Vue.config.productionTip = false
Vue.prototype.$http = axios; // vue-resource
// Vue.component();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
