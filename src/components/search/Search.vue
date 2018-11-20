<template>
    <div id="serach">
        <!-- <van-loading type="spinner" /> -->
        <NavBar></NavBar>
        <van-search show-action :placeholder="placeholder.default" v-model="query">
            <div slot="action" @click="onSearch(query)">搜索</div>
        </van-search>
        <ul>
            <li class="songItem" v-for="(item,index) in songs" :key="index" @click="goPlayer(item.id)">
                {{item.name}}
            </li>
        </ul>
        <p class="search-hot">热门搜索</p>
        <div class="search-text">
            <span @click="addQuery(item.first)" v-for="(item,index) in name" :key="index">
                {{item.first}}
            </span>
        </div>
        <div class="search-history">
            <p class="search-hot">历史记录</p>
            <div class="search-text">
                <span @click="addQuery(item)" v-for="(item,index) in history" :key="index">
                    {{item}}
                </span>
            </div>
        </div>
        
    </div>
</template>
<script>
import NavBar from "../v-header/NavBar.vue"
import {debounce} from '../../common/js/utl.js'
import {mapGetters, mapMutations, mapActions} from 'vuex'
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
            query:'',
            songs:[],
            history:[]
        }
    },
    created(){
        this._getSearch()
        this.$watch('query', debounce((newQuery) => {
            this.$emit('query', newQuery)
        }, 300))
        
    },
    methods:{
        //获取热门搜索数据
        _getSearch(){
            getSearch().then((res=>{
                if(res.status === ERR_OK){
                    this.name = res.data.result.hots
                }else{
                    console.error('获取搜索数据失败！')
                }
            }))
        },
        //通过关键字获取搜索数据
        _getSearchResult(keyword){
            let keywords = keyword
            getSearchResult(this.query=" "?keywords:this.query,30).then((res=>{
                this.history.push(this.query)
                if(res.status === ERR_OK){
                    this.songs = res.data.result.songs
                    // console.log(res)
                }else{
                    console.error('搜索数据获取失败！')
                }
            }))
        },
        addQuery(keyword){
            this._getSearchResult(keyword)
        },
        
        onSearch(query){
            this.history.push(query)
            this._getSearchResult(query)
        },
        
       goPlayer(id){
           this.setCurrentId(id)
           this.$router.push({
                name:'player',
                params:{
                    id:id
                }
            })
       },
       ...mapMutations({
            setCurrentId:'setCurrentId',
        }),

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
.search-history{
    clear: both;
}
.songItem{
        height: 1rem;
        width: 100%;
        text-align: left;
        padding: 0.1rem;
        box-sizing: border-box;
        border-bottom:1px solid #eee;
        line-height: 1rem;
    }
</style>
