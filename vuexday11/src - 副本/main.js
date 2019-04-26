import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //程序中的所有组件才能来使用store(仓库)里面状态
  render: h => h(App)
})
