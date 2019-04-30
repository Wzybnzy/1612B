<template>
    <div>
        <header>
            <span><</span>
            <span>{{title}}</span>
        </header>
        <ul>
            <li class="active">综合</li>
            <li @click="SortClick('sales')">销量</li>
            <li @click="SortClick('price')">价格</li>
            <li>最新</li>
        </ul>
        <div>
            <my-list v-for="(item,index) in flowerList" 
            :key="index"
            :img="item.Image"
            :Introduction="item.Introduction"
            :Price="item.Price"
            :Name="item.Name"
            :NowPromo="item.NowPromo"
            :Sales="item.Sales"
            ></my-list>
        </div>
    </div>
</template>
<script>
import myList from '../components/my-list';
export default {
    props:{

    },
    components:{
        myList
    },
    data(){
        return {
            flowerList:[],
            title:''
        }
    },
    computed:{

    },
    methods:{
        SortClick(type){
            if(type == 'price'){
                console.log('price');
                this.flowerList.sort((a,b)=>{
                    return b.Price -a.Price;
                });
            } else if(type == 'sales'){
                this.flowerList.sort((a,b)=>{
                    let aSales = a.Sales.includes('万') ? a.Sales.slice(0,a.Sales.length-1) * 10000 : a.Sales;
                    let bSales = b.Sales.includes('万') ? b.Sales.slice(0,b.Sales.length-1) * 10000 : b.Sales;
                    // if(a.Sales.includes('万')){
                    //     console.log(a.Sales.slice(0,a.Sales.length-1) * 10000);

                    // } else {

                    // }

                    return bSales - aSales;
                });
            }
        }
    },
    created(){
        this.$http.get('/api/list').then((res)=>{
            console.log(res.data.Datas);
            this.flowerList = res.data.Datas.FlowerList;
            this.title = res.data.Datas.FlowerListBanners.Title;
        });
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
header{
    height: 44px;
    width: 100%;
    display: flex;
    background: cornflowerblue;
}
ul{
    height: 50px;
    width: 100%;
    display: flex;
}
ul li{
    flex: 1;
    text-align: center;
    line-height: 50px;
}
ul li.active{
    color: coral;
}
</style>