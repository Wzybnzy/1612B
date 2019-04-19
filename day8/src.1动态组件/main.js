import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render(func){
  //   return func(App);
  //   console.log(func(App));
  // }
  render: h => h(App)
})
