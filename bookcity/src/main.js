import Vue from 'vue'
import App from './App'
import router from './router'
import myHeader from './components/my-header'

Vue.config.productionTip = false

Vue.component('myHeader',myHeader);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
