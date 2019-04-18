<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <my-list v-for="(item,index) in arr" :key="index"
    :grade="item.grade" 
    :count="item.count" 
    :styles="item.styles" 
    :img="item.img"
    :ind ="index"
    @addCount="add"
    ></my-list>
  </div>
</template>

<script>
import myList from "./components/list";
export default {
    name: "App",
    data() {
        return {
            arr: [
                {
                    grade: "1612B",
                    count: 40,
                    styles: {
                        height: "120px",
                        width: "120px",
                        display: "inline-block"
                    },
                    img: [
                        "https://t12.baidu.com/it/u=1519805552,4171296624&fm=173&app=49&f=JPEG?w=218&h=146&s=BFA06D85061105D25CA1751B03006051",
                        "https://t10.baidu.com/it/u=2260573989,1997197318&fm=173&app=49&f=JPEG?w=218&h=146&s=4BB632C542733D8200BDB002030040D3",
                        "https://t12.baidu.com/it/u=807357320,2973828595&fm=173&app=49&f=JPEG?w=218&h=146&s=0814659046730F82021871210300E0D0"
                    ]
                },
                {
                    grade: "1612A",
                    count: 34,
                    styles: {
                        height: "120px",
                        width: "120px",
                        display: "inline-block"
                    },
                    img: [
                        "https://t12.baidu.com/it/u=1519805552,4171296624&fm=173&app=49&f=JPEG?w=218&h=146&s=BFA06D85061105D25CA1751B03006051",
                        "https://t10.baidu.com/it/u=2260573989,1997197318&fm=173&app=49&f=JPEG?w=218&h=146&s=4BB632C542733D8200BDB002030040D3",
                        "https://t12.baidu.com/it/u=807357320,2973828595&fm=173&app=49&f=JPEG?w=218&h=146&s=0814659046730F82021871210300E0D0"
                    ]
                }
            ]
        };
    },
    components: {
        myList
    },
    methods:{
      add(count,ind){
        console.log(count,ind);
        this.arr[ind].count++;
      }
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
