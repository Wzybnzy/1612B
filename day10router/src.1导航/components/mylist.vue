<template>
   <dl @click="goToDetail" :class="{'active': flag}">
       <dt>
           <img :src="img" alt="">
       </dt>
       <dd>
           <h3>{{title}}</h3>
           <span>{{time}}</span>
           <span>{{num}}</span>
       </dd>
   </dl>
</template>
<script>
export default {
    props:['img','title','num','id','time','flag'],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        goToDetail(){
            this.$router.push({name:'detail',params:{id:this.id}});
            this.$emit('changeColor',this.id);
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
dl {
    display: flex;

}
dl dt{
    height: 120px;
    width: 120px;
}
dl dt img{
    height: 100%;
    width: 100%;
}
dl.active{
    color: #ccc;
}
</style>