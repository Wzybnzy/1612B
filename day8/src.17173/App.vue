<template>
  <div id="app">
      <my-list v-for="(item,index) in list" :key="index" 
      :img="item.contentFirstImg"
      :title="item.imgTitle"
      :time="item.publishTime"
      ></my-list>
  </div>
</template>

<script>
import myList from './components/list';
import axios from 'axios';
export default {
    name: "App",
    data() {
        return {
            list:[]
        };
    },
    components: {
        myList
    },
    methods:{
      
    },
    created(){
        axios.get('/api/list').then((res)=>{
            console.log(res.data.data);
            this.list = res.data.data;
        });
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
