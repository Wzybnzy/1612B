<template>
    <div>
        <div class="title" ref="title">
            <dl v-for="(item,index) in answerList" :key="index"
            >
                <dt>
                    <span v-if="item.flag == true">√</span>
                    <span v-if="item.flag == false">×</span>
                    <span>
                        {{item.type}}
                    </span>
                </dt>
                <dd></dd>
            </dl>
        </div>
       <my-answer></my-answer>
    </div>
</template>
<script>
import myAnswer from '../components/answer';
import {mapState,mapMutations} from 'vuex';
export default {
    props:{

    },
    components:{
        myAnswer
    },
    data(){
        return { 
        }
    },
    computed:{
        ...mapState(['index','answerList',"chooseInd","list"])
    },
    methods:{
        ...mapMutations(['addNum']),
       goToNext(){
           this.addNum(this.chooseInd)
       }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped>
.title{
width: 100%;
display: flex;
}
.title >dl{
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.title dt{
    height: 30px;
    width: 30px;
}
.title dd{
    height: 24px;
    width: 24px;
    border: 1px solid #ccc;

    border-radius: 100%;
}
dl.active dd{
    background: red;
}
dl.current dd{
    background: cadetblue;
}
</style>
