<template>
    <li>
        <p>商品名：{{title}}</p>
        <p>商品价格：{{price}}</p>
        <my-count :num="num" :id="id"></my-count>
    </li>
</template>
<script>
import myCount from './count';
export default {
    props:['title','price','num','id'],
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