<template>
  <div id="app">
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
#app,html,body {
 height: 100%;
 width: 100%;

}
#app>div{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.page{
  flex: 1;
  width: 100%;
}
</style>
