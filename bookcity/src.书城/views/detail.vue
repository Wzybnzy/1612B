<template>
    <div>
        <my-header>
            <span @click="$router.go(-1)"><</span>
            <span>{{$route.query.title}}</span>
            <router-link to="/bookcity">首页</router-link>
        </my-header>
        <div v-if="mes">这本书的信息是：{{mes}}</div>
        <my-list 
        :img="item.cover"
        :title="item.title"
        classname="leftlist"
        v-else
        >
            <p>{{item.authors}}</p>
            <p>{{item.summary}}</p>
        </my-list>
        <button v-if="!mes" @click="goToRead">开始阅读</button>
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
            item:{},
            mes:''
        }
    },
    computed:{

    },
    methods:{
        goToRead(){
            this.$router.push({path:'/read'});
        }
    },
    created(){
        this.$http.get('/api/detail?id='+this.$route.params.id).then((res)=>{
            console.log(res.data);
            if(res.data.code == 1){
                this.item = res.data.data.item;
            } else {
                this.mes = res.data.mes;
            }

        });
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>