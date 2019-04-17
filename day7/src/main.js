import App from './App';
import Vue from 'vue';

console.log(App);

new Vue({
    el:'#app',
    template:'<App />',
    components:{
        App
    }
});
