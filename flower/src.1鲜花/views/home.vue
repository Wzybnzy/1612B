<template>
    <div>
        <div class="page">
            <div class="titleheader">
                <ul :style="{'width':width+'px'}" ref="title">
                    <li v-for="(item,index) in banner" :key="index" :class="{'active':index == ind}">{{item.Linkage}}</li>
                </ul>
            </div>
            <div class="swiper-container banner">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" 
                    v-for="(item,index) in banner" 
                    :key="index"
                    @click="goToList(item.Type)"
                    >
                        <img :src="item.ImageUrl" alt="">
                    </div>
                </div>
            </div>
        </div>
        <my-footer></my-footer>
    </div>
</template>
<script>
import BScroll from "better-scroll";
import Swiper from 'swiper';
export default {
    props: {},
    components: {},
    data() {
        return {
            banner: [],
            ind: 0,
            width: 0
        };
    },
    computed: {},
    methods: {
        goToList(type){
            this.$router.push({name:'list',params:{type:type}});
        }
    },
    created() {
        let that = this;
        this.$http.get("api/banner").then(res => {
            console.log(res.data);
            this.banner = res.data.BannerList;

            this.$nextTick(() => {
                // console.log(this.$refs.title.children);
                Array.from(this.$refs.title.children, item => {
                    this.width += item.offsetWidth;
                });
                // console.log(this.width, "999");
                let bs = new BScroll(".titleheader",{
                    scrollX:true
                });

                new Swiper('.banner',{
                    spaceBetween:11,
                    on:{
                        slideChangeTransitionEnd(){
                            console.log(this.activeIndex);
                            that.ind = this.activeIndex;
                            bs.scrollToElement(that.$refs.title.children[that.ind],200);
                        }
                    }
                });
            });
        });
    },
    mounted() {}
};
</script>
<style scoped lang="">
.page {
    display: flex;
    flex-direction: column;
}
.titleheader {
    height: 50px;
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid #cccccc;
}
.titleheader ul {
    display: flex;
}
.titleheader ul li {
    padding: 0 15px;
    box-sizing: border-box;
    flex-shrink: 0;
    line-height: 50px;
}
.active {
    color: coral;
}
.swiper-container {
    flex: 1;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}
.swiper-slide img{
    width: 100%;
}
</style>