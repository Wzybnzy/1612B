<template>
    <div>
        <input type="text" v-focus="'111'" v-model="val">
        <p style="height:120px;width:120px;" v-bg="'blue'"></p>
        <div style="height:120px;width:120px;" v-for="(item,index) in list" :key="index" v-img="item"></div>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            val:'',
            list:[
                'http://pic.pptbz.com/pptpic/201203/2012031220134655.jpg',
                'http://pic38.nipic.com/20140212/17942401_101320663138_2.jpg'
            ]
        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    },
    directives:{
        focus:{
            bind(){
                console.log('bind');
            },
            inserted(el,obj){
                // console.log(el,obj);
                el.focus();
            },
            update() {
                console.log('update');
            }
        }
    }

}
</script>
<style scoped lang="">

</style>