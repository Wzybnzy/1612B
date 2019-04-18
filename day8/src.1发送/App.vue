<template>
  <div id="app">
     <my-header></my-header>
     <my-content :list="list"></my-content>
     <my-footer @send="send"></my-footer>
  </div>
</template>

<script>
import myHeader from './components/my-header';
import myContent from './components/my-content';
import myFooter from './components/my-footer';
export default {
    name: "App",
    data() {
        return {
            list:[]
        };
    },
    components: {
        myHeader,
        myContent,
        myFooter
    },
    methods:{
      send(val){
          console.log(val);
          this.list.push(val);
      }
    },
    created(){
        
    }
};
</script>

<style lang="scss" >
@import './scss/common.scss';
@import './scss/_mixin.scss';
#app {
    font-size: pxTorem(16px);
   @include box_flex;
   height: 100%;
   width: 100%;
   @include direction(column);
}
</style>


