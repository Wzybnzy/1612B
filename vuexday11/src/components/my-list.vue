<template>
   <dl>
       <dt></dt>
       <dd>
           <p>商品：{{title}}</p>
           <p>价格：{{price}}</p>
           <my-count :num="num" :id="id" :type="type"></my-count>
       </dd>
   </dl>
</template>
<script>
import myCount from './count';
export default {
    props:['title','price','id','num','type'],
    components:{
        myCount
    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    dl{
        display: flex;
        margin-bottom: 10px;
    }
    dt{
        height: 120px;
        width: 120px;
        background: cadetblue;
    }
</style>