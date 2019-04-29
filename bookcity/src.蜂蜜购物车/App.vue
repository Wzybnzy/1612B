<template>
  <div id="app">
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myFooter from './components/footer';
export default {
  name: 'App',
  components:{
    myFooter
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
html,body,#app{
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
#app>div{
  flex:1;
  width: 100%;
  
}
</style>
