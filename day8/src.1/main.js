import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();

//全局自定义指令
// Vue.directive('focus',{
//    //钩子函数
//    inserted(el){
//      console.log(el);
//      el.focus();
//    }
// });

Vue.directive('bg',{
  inserted(el,obj){
    console.log(el,obj);
    el.style.background = obj.value;
  }
});


Vue.directive('img',{
  inserted(el,obj){
    console.log(el,obj);
    let color = Math.floor(Math.random() * 1000000);
    console.log(color);
    el.style.background = '#'+color;

    let img = new Image();
        img.src = obj.value;
        img.onload = ()=>{
          el.style.background = 'url('+obj.value+')';
          el.style.backgroundSize = '100% 100%';
        }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render(func){
  //   return func(App);
  //   console.log(func(App));
  // }
  render: h => h(App)
})
