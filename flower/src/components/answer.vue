<template>
    <div>
        <h3></h3>
        <ul>
            <li v-for="(item,current) in answerList[index].answer" :key="current" 
            :class="[{'active':ind == current}]"
            @click="change(item,current)"
            >
                <span></span>
                <span>{{chooseType(current)}} {{item.answer_name}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapState, mapActions ,mapMutations} from "vuex";
export default {
    props: {},
    components: {},
    data() {
        return {
        };
    },
    computed: {
        ...mapState(["answerList", "index","ind","chooseInd"]),
        
    },
    methods: {
        chooseType: type => {
            switch (type) {
                case 0:
                    return "A";
                case 1:
                    return "B";
                case 2:
                    return "C";
                case 3:
                    return "D";
            }
        }, 
        ...mapMutations(['changeInd']),
        ...mapActions(['changeActions']),
        change(item, index) {
            if(this.index == this.answerList.length -1){
                setTimeout(()=>{
                    this.$router.push({path:'/last'});
                },1000);
            }
            this.changeInd(index);    
            this.changeActions(item) 
        },
    },
    created() {
            
    },
    mounted() {},
    updated(){
     
    }
};
</script>
<style scoped lang="">
ul > li > span:nth-child(1) {
    height: 30px;
    width: 30px;
    display: inline-block;
}
.active {
    color: hotpink;
}
.current {
    color: red;
}
</style>