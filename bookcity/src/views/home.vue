<template>
    <div class="home">
        <div>
            <div class="left">
                <ul>
                    <li v-for="(item,index) in getlistGetters" :key="index" :class="{'active':index == ind}" @click="goToRight(index)">{{item.title}}</li>
                </ul>
            </div>
            <div class="right">
                <div v-if="!getlistGetters[ind]">
                    loading...
                </div>
                <my-list v-for="(item1,index1) in getlistGetters[ind].res" :key="index1"
                :img="item1.img"
                :title="item1.title"
                :price="item1.price"
                :num="item1.num"
                :id="item1.id"
                :ind="ind"
                :index="index1"
                v-else
                ></my-list>
            </div>
        </div>
        <footer>    
            <my-dialog v-show="flag"></my-dialog>
            <span @click="showDialog">总价:{{getTotalPrice}}</span>
        </footer>
    </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex';
import myList from '../components/my-list';
import myDialog from '../components/my-dialog';
export default {
    props:{

    },
    components:{
        myList,
        myDialog
    },
    data(){
        return {
            ind:0,
            flag:false
        }
    },
    computed:{
        ...mapGetters(['getlistGetters','getTotalPrice'])
    },
    methods:{
        ...mapActions(['getList']),
        goToRight(ind){
            this.ind = ind;
        },
        showDialog(){
            this.flag = !this.flag;
        }
    },
    created(){
        console.log(this);
        this.getList();
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.home>div{
    flex: 1;
    width: 100%;
    display: flex;
}
.left{
    width: 120px;
    height: 100%;
}
.left li{
    height: 44px;
    line-height: 44px;
    text-align: center;
    background: #ccc;
}
.left li.active{
    background: #fff;
}
.right{
    flex:1;
    height: 100%;
    overflow-y: auto;
}
footer{
    height: 50px;
    width: 100%;
    background: #ccc;
}
</style>