import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render(func){
  //   return func(App);
  //   console.log(func(App));
  // }
  render: h => h(App)
})
