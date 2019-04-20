<template>
    <div class="wrapper">
        <div class="content">
            <div class="left">
                <ul class="leftlist">
                    <li v-for="(item,index) in classify" :key="index" :class="{'active':index == ind}" @click="change(index,item.type)">{{item.title}}</li>
                </ul>
            </div>
            <div class="right">
                <my-list v-for="(item1,index1) in list" :key="index1" :title="item1.title" :price="item1.price" :id="item1.id" :num="item1.num" :type="item1.type"></my-list>
            </div>
        </div>
        <footer>
            <my-dialog v-show="isShow" :buyList="buyList"></my-dialog>
            <div @click="showDialog">
                <span>总数：{{totalCount}}</span>
                <span>总价：{{totalPrice}}</span>
            </div>

        </footer>
    </div>
</template>
<script>
import classify from "./js/classify";
import list from "./js/list";
import myList from "./components/my-list";
import myDialog from "./components/dialog";
export default {
    props: {},
    components: {
        myList,
        myDialog
    },
    data() {
        return {
            classify: [],
            list: [],
            buyList: [],
            ind: 0,
            isShow:false
        };
    },
    computed: {
        totalPrice() {
            return this.buyList.reduce(
                (prev, cur) => prev + cur.num * cur.price,
                0
            );
        },
        totalCount() {
            return this.buyList.reduce((prev, cur) => prev + cur.num, 0);
        }
    },
    methods: {
        getList(list, type) {
            //筛选数据
            return list.filter(item => item.type == type);
        },
        change(ind, type) {
            //切换
            this.ind = ind;
            this.list = this.getList(list, type);
        },
        showDialog(){
            this.isShow = !this.isShow;
        }
    },
    created() {
        this.classify = classify;
        this.list = this.getList(list, this.classify[0].type);
        console.log(this);
        this.$bus.$on("addCount", (num, id,type) => {
            console.log(num);
            this.list = this.getList(list,type);
            let index = this.list.findIndex(item => item.id == id);
            this.list[index].num = num;
            let ind = this.buyList.findIndex(item => item.id == id);
            if (ind == -1) {
                this.buyList.push(this.list[index]);
            }
            let cur = this.classify.findIndex(item=> item.type == type);
            this.ind = cur;
        });
    },
    mounted() {}
};
</script>
<style  lang="">
* {
    list-style: none;
}
html,
body {
    height: 100%;
    width: 100%;
}
.wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.content {
    flex: 1;
    width: 100%;
    display: flex;
}
.left {
    height: 100%;
    width: 120px;
    border-right: 1px solid #ccc;
}
.right {
    flex: 1;
    height: 100%;
}
.leftlist li {
    height: 120px;
    line-height: 120px;
    text-align: center;
}
.leftlist li.active {
    color: red;
}
footer {
    height: 50px;
    width: 100%;
    border-top: 1px solid #ccc;
}
</style>