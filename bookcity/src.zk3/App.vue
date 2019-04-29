<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
}
#app>div{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  
}
</style>
