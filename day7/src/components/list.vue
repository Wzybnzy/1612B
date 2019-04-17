<template>
    <div>
        <h3>{{grade}}</h3>
        <p>{{count}}</p>
        <button @click="$emit('addCount',count,'0')">点击</button>
        <img :src="item" alt="" v-for="(item,index) in img" :style="styles" :key="index">
    </div>
</template>
<script>
//不能在子组件里面修改父组件的值
export default {
    // props:['grade','count','styles','img'],
    // props:{
    //     grade:String,
    //     count:Number
    // },
    props:{
        grade:{
            type:String,
            default:'999',
            required:true
        },
        count:{
            type:Number,
            validator(val){ //自定义验证，当验证失败的时候，开发版本会在控制台出一个警告
                console.log(val);
                return val>30;
            }
        },
        styles:{
            type:Object
        },
        img:{
            type:Array,
            default(){ //如果参数类型是数组或者对象的时候，default需要是一个函数，需要有一个return
                return [
                "https://t11.baidu.com/it/u=3139249624,1759339035&fm=173&app=49&f=JPEG?w=218&h=146&s=66F1C27E48C0CC4906AB8FA90200E00E",
                "http://fc-feed.cdn.bcebos.com/0/pic/74006a1d084c21080e2f5238836b2251.jpg",
                "http://fc-feed.cdn.bcebos.com/0/pic/4cd8b4075fa60d4cd2c9e6cc61c99a3f.jpg"
            ]
            }
        }
    },
    data() {
        return {
        
        };
    },
    methods:{
        add(){
            this.count++;
        }
    },
    computed:{

    },
    created(){
        console.log(this);
    }
};
</script>

<style scoped>
    div{
        height: 100px;
        width: 300px;
        /* background: red; */
    }
</style>

