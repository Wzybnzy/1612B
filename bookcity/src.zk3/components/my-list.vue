<template>
   <dl>
       <dt>
           <img :src="img" alt="">
       </dt>
       <dd>
           <p>{{title}}</p>
           <p>{{price}}</p>
           <my-count :num="num" :id="id" :ind="ind" :index="index"></my-count>
       </dd>
   </dl>
</template>
<script>
import myCount from './count';
export default {
    props:['img','title','id','price','num','ind','index'],
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
dl dt{
    height: 120px;
    width: 120px;
}
dl dt img{
    height: 100%;
    width: 100%;
}
</style>