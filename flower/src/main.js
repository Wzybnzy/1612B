import Vue from 'vue'
import App from './App'
import router from './router'
import myFooter from './components/footer'
import 'swiper/dist/css/swiper.min.css'
import axios from 'axios'
Vue.config.productionTip = false
Vue.component('myFooter',myFooter)
Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
