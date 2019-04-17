<template>
    <div class="app">
       <list :grade="grade" :count="count" :styles="style" :img="img" @addCount="add"></list>
       <!-- <list></list>
       <list></list> -->
    </div>
</template>
<script>
//第一步引入组件
import list from './components/list';
export default {
    data(){
        return {
            grade: "1612B",
            count: 40,
            style: {
                height: "120px",
                width: "120px",
                display: "inline-block"
            },
            img: [
                "https://t11.baidu.com/it/u=3139249624,1759339035&fm=173&app=49&f=JPEG?w=218&h=146&s=66F1C27E48C0CC4906AB8FA90200E00E",
                "http://fc-feed.cdn.bcebos.com/0/pic/74006a1d084c21080e2f5238836b2251.jpg",
                "http://fc-feed.cdn.bcebos.com/0/pic/4cd8b4075fa60d4cd2c9e6cc61c99a3f.jpg"
            ]
        }
    },
    components:{ //第二步注册组件，第三步使用组件
        list
    },
    methods:{
        add(count,ind){
            // console.log(count,ind);
            this.count++;
        }
    }
}
</script>
