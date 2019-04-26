import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();


// Vue.directive('focus', {
//     inserted(el) { 
//         console.log(el);
//         el.focus();
//     },
// });
Vue.directive('bg',{
  inserted(el,obj){
    console.log(el,obj);
    el.style.background=obj.value;
  }
});

Vue.directive('img',{
  inserted(el,obj){
    console.log(el,obj);
    let color = Math.floor(Math.random() * 1000000);
    console.log(color);
    el.style.background ='#'+color;
    //图片加载成功之前，展示背景颜色，
      let img = new Image();
          img.src = obj.value;
          img.onload= () => {
            el.style.background = 'url('+obj.value+')';
            el.style.backgroundSize="100% 100%";
          }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
