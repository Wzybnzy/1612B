<template>
   <dl>
       <dt>
           <img :src="img" alt="">
       </dt>
       <dd>
           <span>{{title}}</span>
           <span>{{getTime}}</span>
       </dd>
   </dl>
</template>
<script>
export default {
    props:{
        img:String,
        title:String,
        time:Number
    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        getTime(){
            return new Date(this.time).toLocaleDateString()
        }
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