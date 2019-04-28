<template>
    <div>
        <input type="text" placeholder="请输入用户名" v-model="name">
        <input type="password" placeholder="请输入密码" v-model="pwd">
        <button @click="goToLogin">登录</button>
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
            name:'',
            pwd:''
        }
    },
    computed:{

    },
    methods:{
        goToLogin(){
            console.log(this.name,this.pwd)
            this.$http.post('/api/login',{name:this.name,pwd:this.pwd}).then((res)=>{
                console.log(res);
                if(res.data.code == 1){
                    window.localStorage.setItem('userId','1234');
                    this.$router.push({path:'/read'});
                }
            });
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>