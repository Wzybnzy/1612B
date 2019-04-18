<template>
    <div>
        <span>{{grade}}</span>
        <span>{{count}}</span>
        <button @click="$emit('addCount',count,ind)">点击</button>
        <img :src="item" alt="" v-for="(item,index) in img" :key="index" :style="styles">
    </div>
</template>
<script>
export default {
    props:['grade','count','styles','img','ind'],
    data(){
        return{
            
        }
    },
    created(){
        console.log(this);
    }
}
</script>
