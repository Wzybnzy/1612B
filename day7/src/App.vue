<template>
    <div>
        <h3>{{grade}}</h3>
        <p>{{count}}</p>
        <button @click="add">点击</button>
        <img :src="item" alt="" v-for="(item,index) in img" :style="style" :key="index">
    </div>
</template>

<script>
export default {
    data() {
        return {
            grade: "1612B",
            count: 40,
            style: {
                height: "120px",
                width: "120px",
                display: "inline-block"
            },
            img: [
                "https://paimgcdn-feed.baidu.com/v.4127BB91C84B5EEF05FE8D788E079822?src=http%3A%2F%2Fms.bdimg.com%2Fdsp-image%2F2212069328.jpg&rz=sar_3_370_245",
                "https://paimgcdn-feed.baidu.com/v.DAC464DDD8BBD0025207986C663AF741?src=http%3A%2F%2Fms.bdimg.com%2Fdsp-image%2F2212094894.jpg&rz=sar_3_370_245",
                "https://paimgcdn-feed.baidu.com/v.FB3E4587AA66AFBB33C9A3F363EA6FB3?src=http%3A%2F%2Fms.bdimg.com%2Fdsp-image%2F2212073396.jpg&rz=sar_3_370_245"
            ]
        };
    },
    methods:{
        add(){
            this.count++;
        }
    },
    computed:{

    },
    created(){

    }
};
</script>