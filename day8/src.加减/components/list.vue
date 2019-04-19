<template>
    <li>
        <span>商品名称：{{title}}</span>
        <span>商品价格：{{price}}</span>
        <my-count :count="count" :id="id"></my-count>
    </li>
</template>
<script>
import myCount from './count';
export default {
    props:['title','price','count','id'],
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

</style>