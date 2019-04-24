import Vue from 'vue'
import App from './App'
import router from './router'
import Footer from './components/footer'
Vue.config.productionTip = false

Vue.component('Footer',Footer);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
