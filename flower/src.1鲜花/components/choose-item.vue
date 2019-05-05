<template>
    <div>
        <h3>{{Subject}}</h3>
        <div class="choose">
            <dl v-for="(item,index) in content" :key="index" 
            :class="[{'border': Layout=='border'},{'active':index == ind}]"
             @click="clickDl(index,Subject,item.Label)">
                <dt>
                    <img :src="item.Icon" alt="">
                </dt>
                <dd>
                    <span>{{item.Label}}</span>
                </dd>
            </dl>
        </div>

    </div>
</template>
<script>
import {mapMutations} from 'vuex';
export default {
    props: ["Subject", "content",'Layout'],
    components: {},
    data() {
        return {
            ind:Number
        };
    },
    computed: {},
    methods: {
        ...mapMutations(['getList']),
        clickDl(ind,Subject,Label){
            this.ind = ind;
            let obj = {
                Subject,
                Label
            };
            this.getList(obj);
            console.log(obj);
        }
    },
    created() {},
    mounted() {}
};
</script>
<style scoped lang="">
.choose{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
dl{
    width: 33.3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

dl.border{
    border: 1px solid #ccc;
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
}
.active{
    box-sizing: border-box;
    border: 1px solid red;
}
</style>