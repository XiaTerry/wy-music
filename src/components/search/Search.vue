<template>
    <div id="serach">
        <NavBar></NavBar>
        <van-search  :placeholder="placeholder" v-model="query" />
        <p class="search-hot">热门搜索</p>
        <div class="search-text">
            <span @click="addQuery(item.first)" v-for="(item,index) in name" :key="index">
                {{item.first}}
            </span>
            <!-- <van-button size="small">小型按钮</van-button> -->
        </div>
    </div>
</template>
<script>
import NavBar from "../v-header/NavBar.vue"
import { HOST, ERR_OK } from '../../common/js/config.js'
import {getSearch,getSearchResult} from '../../api/search.js'
export default {
    components:{
        NavBar
    },
    data () {
        return {
            name:[],
            placeholder: {type: String,default: '搜索歌曲、歌手'},
            query:''
        }
    },
    created(){
        this._getSearch()
        // console.log(this.name)
    },
    methods:{
        //获取热门搜索数据
        _getSearch(){
            getSearch().then((res=>{
                if(res.status === ERR_OK){
                    this.name = res.data.result.hots
                    console.log(this.name)
                }else{
                    console.error('获取搜索数据失败！')
                }
            }))
        },
        //通过关键字获取搜索数据
        _getSearchResult(keyword){
            let keywords = keyword
            getSearchResult(keywords).then((res=>{
                if(res.status === ERR_OK){
                    console.log(res)
                }else{
                    console.error('搜索数据获取失败！')
                }
            }))
        },
        addQuery(keyword){
            console.log(keyword)
            this._getSearchResult(keyword)
        },
        
        
       

    }
}
</script>


<style lang="scss" scoped>
#serach{
    margin-top: 1rem;
}
.btn{
    width: 100%;
    height: 1rem;
    background: #fff;
    border:1px solid #eee;
    box-sizing: border-box;
}
.search-hot{
    text-align: left;
    padding: 0.2rem;
    box-sizing:border-box;
    font-size: 16px;
    color: #000;
    font-weight: 600;
}
.search-text{
    span{
        padding:0.2rem;
        background: #eee;
        margin: 0.2rem 0  0 0.2rem;
        float:left;
        font-size: 14px;
        color: #000;
        border-radius:2rem;
    }
}
</style>
