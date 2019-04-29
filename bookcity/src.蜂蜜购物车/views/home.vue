<template>
    <div>
        <my-list v-for="(item,index) in list" :key="index" :item="item"></my-list>
    </div>
</template>
<script>
import axios from 'axios';
import myList from '../components/my-list';
export default {
    props:{

    },
    components:{
        myList
    },
    data(){
        return {
            list:[]
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        axios.get('/api/shoplist').then((res)=>{
            console.log(res.data);
            this.list = res.data;
        });
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>