<template>
    <div>
        <h3>代办事项</h3>
        <ul>
            <li v-for="(item,index) in getlistGetters" :key="index" :class="{'active':item.completed}" @dblclick="update(item)">
                <span>{{item.title}}</span>
                <span @click="delList(item.id)">删除</span>
            </li>
        </ul>
        <!-- {{getlistGetters}} -->
    </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex';
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        ...mapGetters(['getlistGetters'])
    },
    methods:{
        ...mapActions(['getList','delList','updateList']),
        update(item) {
            const obj = {
                title:item.title,
                userId:item.userId,
                id:item.id,
                completed: !item.completed
            };
            this.updateList(obj);
        },
    },
    created(){
        this.getList();
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
*{
    margin: 0;;padding: 0;
    list-style: none;
}
ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
li{
    padding: 5px 10px;
    background: darkgreen;
    color: #fff;
    flex-shrink: 0;
    margin: 10px;
}
li.active{
    background: darkslateblue;
}
</style>