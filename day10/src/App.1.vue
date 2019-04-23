<template>
  <div id="app">
      <button @click="flag = !flag">点击</button>
      <transition>
        <Box v-show="flag"></Box>
      </transition>

      <transition name="a"
      enter-active-class="animated bounceInDown"
      leave-active-class="animated bounceInRight"
      >
        <Box v-show="flag"></Box>
      </transition>

       <transition name="b">
        <Box v-show="flag"></Box>
      </transition>
  </div>
</template>

<script>
import Box from './components/box';
import './css/animate.css';
export default {
  name: 'App',
  components: {
    Box
  },
  data(){
    return {
      flag:false
    }
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.v-enter,.v-leave-to{
  opacity: 0;
  transform: rotate(360deg)
}
.v-enter-active,.v-leave-active{
  transition: all 2s;
}
.v-enter-to,.v-leave{
  opacity: 1;
  transform: rotate(0)
}


.a-enter,.a-leave-to{
  opacity: 0;
  transform: scale(0)
}
.a-enter-active,.a-leave-active{
  transition: all 2s;
}
.a-enter-to,.a-leave{
  opacity: 1;
  transform: scale(2)
}


.b-enter,.b-leave-to{
  opacity: 0;
  transform: translateX(-100%)
}
.b-enter-active,.b-leave-active{
  transition: all 2s;
}
.b-enter-to,.b-leave{
  opacity: 1;
  transform: translateX(0)
}
</style>
