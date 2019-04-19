<template>
    <div class="classify">
        <div class="left">
            <ul>
                <li v-for="(item,index) in list" :key="index" :class="{'active':index == ind}" @click="change(index)">{{item.title}}</li>
            </ul>
        </div>
        <div class="right">
            <dl v-for="(item1,index1) in list[ind].res" :key="index1">
                <dt>{{item1.title}}</dt>
            </dl>
        </div>
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
            list:[
                {
                    title:"女装",
                    res:[
                        {
                            title:'女装1'
                        },
                         {
                            title:'女装2'
                        }
                    ]
                },
                 {
                    title:"男装",
                    res:[
                        {
                            title:'男装1'
                        },
                         {
                            title:'男装2'
                        }
                    ]
                }
            ],
            ind:0
        }
    },
    computed:{

    },
    methods:{
        change(ind){
            this.ind = ind;
        }
    },
    created(){

    },
    mounted(){

    },
    destroyed(){ //销毁实例
        console.log('classify');
    }
}
</script>
<style scoped lang="">
.classify{
    height: 100%;
    width: 100%;
    display: flex;
}
.left{
    width: 200px;
    height: 100%;
}
.right{
    flex: 1;
    height: 100%;
}
li.active{
    color: red;
}
</style>