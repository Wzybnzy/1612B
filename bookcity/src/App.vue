<template>
  <div id="app">
    <router-view/>
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
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 100%;
  
}
#app>div>div{
  flex: 1;
}
</style>
