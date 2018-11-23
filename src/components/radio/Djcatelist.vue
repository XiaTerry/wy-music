<template>
    <div class="dj-cate">
        <NavBar></NavBar>
        <div class="dj-cate-hot">
            <h2>热门分类</h2>
            <ul class="dj-cate-list">
                <li class="item" v-for="(item,index) in hotCateList" :key="index">
                    
                    <p>
                        <i class="iconfont icon-yinyue"></i>
                        {{item.name}}
                    </p> 
                </li>
            </ul>
        </div>
       
        <div class="dj-cate-more-list">
            <h2>更多分类</h2>
            <ul class="dj-cate-list" v-for="(item,index) in moreCateList" :key="index">
                <li class="item">
                    <p>
                        <i class="iconfont icon-yinyue"></i>
                        {{item.name}}
                    </p> 
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
import NavBar from "../v-header/NavBar.vue"
import {getDjCateList} from '../../api/radio.js'
import { HOST, ERR_OK } from '../../common/js/config.js'
export default {
    components:{
        NavBar
    },
    data(){
        return{
            hotCateList:[],
            moreCateList:[]
        }
    },
    created(){
        this._getDjCateList()
    },
    methods:{
        _getDjCateList(){
            getDjCateList().then((res=>{
                if(res.status === ERR_OK){
                    this.hotCateList = res.data.categories.slice(0,6)
                    this.moreCateList = res.data.categories.slice(6,20)
                    // console.log(res)
                }else{
                    console.error("数据获取失败！")
                }
            }))
        },
    }
}
</script>

<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
.iconfont{
    font-size: 0.5rem;
    color: red;
    position: absolute;
    left: 0.25rem;
}
.dj-cate{
    margin-top: 1rem;
    overflow-x: auto;
    h2{
        padding:0.3rem;
        color: #000;
        font-size: $font-size-large;
        border-bottom: 1px solid #eee;
    }
    &-hot{
        height: 4.5rem;
    }
    &-list{
        box-sizing: border-box;
        .item{
            height: 1rem;
            width: 50%;
            border-bottom:1px solid #eee;
            position: relative;
            float: left;
            p{
                position: absolute;
                top: 25%;
                height: 0.5rem;
                width: 100%;
                color: #000;
                font-size: $font-size-large;
                line-height: 0.5rem;
            }
            p:nth-child(2n+1){
                border-right: 1px solid #eee;
            }
        }
        .item:last-child(){
            margin-bottom: 1rem;
            background: #000;
        }
    }
    &-more-list{
        height: 9rem;
        clear: both;
        margin-bottom: 1rem;
    }
}
</style>
