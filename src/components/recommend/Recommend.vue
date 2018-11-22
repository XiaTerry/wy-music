<template>
    <div class="recommend">
        <Vheader></Vheader>
        <!-- 轮播图 -->
       <Banner></Banner>
        <!-- 推荐 菜单 私人FM 每日推荐 歌单 排行榜 -->
        <van-row type="flex" justify="space-around" class="recommend-menu">
            <van-col span="5">
                <div class="item">
                    <i class="iconfont icon-ttpodicon"></i>
                </div>
                私人FM
            </van-col>
            <van-col span="5">
                <div class="item">
                    <i class="iconfont icon-rili1"><span>{{date}}</span></i>
                </div>
                每日推荐
            </van-col>
            <van-col span="5">
                <div class="item"  @click="toAllList()">
                    <i class="iconfont icon-gedan"></i>
                </div>
                歌单
            </van-col>
            <van-col span="5">
                <div class="item" @click="toRankingList()">
                    <i class="iconfont icon-paixing"></i>
                </div>
                排行榜
            </van-col>
        </van-row>
        <!-- 推荐歌单 -->
        <div class="recommend-list">
            <h2 @click="toAllList()">推荐歌单<i class="iconfont icon-fanhui1"></i> </h2>
            <ul class="list-item">
                <li class="list-song" @click="selectSong(item.id)" v-for="item in recommendList" :key="item.id">
                    <div class="img">
                        <div class="gradients"></div>
                        <img v-lazy="item.picUrl" >
                        <p class="play-count">
                        <i class="iconfont icon-ting"></i>
                            {{Math.floor(item.playCount / 10000) }}万
                        </p>
                    </div>
                    <div class="text">
                        <p class="name">{{item.name}}</p>
                    </div>
                </li>
            </ul>  
        </div>
        <div class="recommend-music">
            <h2>最新音乐<i class="iconfont icon-fanhui1"></i></h2>
            <ul>
                <li class="list-song" v-for="item in newList" :key="item.id">
                    <div class="img">
                        <div class="gradients"></div>
                        <img v-lazy="img" >
                    </div>
                    <div class="text">
                        <p class="name">{{item.name}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="recommend-radio">
            <h2 @click="toRadio()">主播电台<i class="iconfont icon-fanhui1"></i></h2>
            <ul>
                <li class="list-song" v-for="(item,index) in radioList" :key="index">
                    <div class="img">
                        <div class="gradients"></div>
                        <img v-lazy="item.picUrl" >
                        <p class="radio-type">
                            {{item.name}}
                        </p>
                    </div>
                    <div class="text">
                        <p class="name">{{item.name}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <!-- <PlayerBar></PlayerBar> -->
    </div>
</template>
<script>
// import PlayerBar from "../player/PlayerBar.vue";
import Vheader from "../v-header/V-header.vue";
import {getBanner, getRecommendList, getRecommendMusic,getDjprogram} from '../../api/recommend.js'
import { HOST, ERR_OK } from '../../common/js/config.js';
import Banner from "../banner/Banner.vue"
export default {
     components:{
        Vheader,
        Banner
    },
    data () {
        return {
            banner:[],
            recommendList:[],
            newList:[],
            radioList:[],
            songList:{},
            date:null,
            img:"http://p2.music.126.net/eZidSYwW1c8S7IDQjKRgBg==/109951163653489761.jpg"
        }
    },
    created(){
       this._getBanner()
       this._getRecommendList()
       this._getRecommendMusic()
       this._getDjprogram()
    },
    mounted(){
        let nowDtate = new Date() 
        this.date = nowDtate.getDate()
    },
    methods:{
        //获取推荐页面中轮播图数据
        _getBanner(){
            getBanner().then((res=>{
                if(res.status === ERR_OK){
                    let list = res.data.banners
                    this.banner = list
                }else{
                    console.error('Banner 获取失败')
                }
            }))
        },
        //获取推荐歌曲数据
        _getRecommendList(){
            getRecommendList().then((res=>{
                if(res.status === ERR_OK){
                    this.songList = res.data
                    this.recommendList = res.data.result.slice(0,6)
                }else{
                    console.error('推荐歌曲 获取失败')
                }
            }))
        },
        //获取最新音乐数据
        _getRecommendMusic(){
            getRecommendMusic().then((res=>{
                if(res.status === ERR_OK){
                    this.newList = res.data.result.slice(0,6);
                }else{
                    console.error('最新音乐 获取失败')
                }
            }))
        },
        //获取推荐电台数据
        _getDjprogram(){
            getDjprogram().then((res=>{
                if(res.status === ERR_OK){
                    this.radioList = res.data.result
                }else{
                    console.error('推荐电台 获取失败')
                }
            }))
        },
        //点击推荐歌单去歌单页面
        toAllList(){
            this.$router.push({
                path:'/songList',
            })
        },
        //点击获取详情推荐歌单列表
        selectSong(id){
            this.$router.push({
                path:`/listDetail/${id}`,
            })
        },
        //点击去到排行榜
        toRankingList(){
            this.$router.push({
                path:'/rankingList'
            })
        },
        //点击主播电台去到电台页面
        toRadio(){
            this.$router.push({
                path:'/radio'
            })
        }
       
    }
}
</script>
<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
$con:"06";
.recommend{
    width: 100%;
    margin-top: 1.75rem;
    margin-bottom: 1rem;
    background: #fff;
    &-menu{
        text-align: center;
        height: 1.8rem;
        border-bottom: 1px solid #eee;
        padding-top: 0.3rem;
        a{
            color: #000;
        }
        .item{
            line-height: 1rem;
            margin-left: 0.15rem;
            width: 1rem;
            height: 1rem;
            background: $color-theme;
            box-shadow: 0.1rem 0.1rem 0.5rem rgba(255,0,0,0.3);
            margin-bottom: 0.15rem;
            border-radius: 50%;
            .iconfont{
                font-size: 0.5rem;
                color: #ffe;
            }
            .icon-rili1{
                position: relative;
            }
            .icon-rili1{
                position: relative;
                span{
                    position: absolute;
                    bottom: -0.3rem;
                    right: 0.1rem;
                }
            }
        }
    }
    h2{
        padding: 0.4rem 0.2rem 0.3rem 0.2rem;
        box-sizing: border-box;
        width: 100%;
        text-align: left;
        font-size: $font-size-large;
        font-weight: 800;
        color: #000;
        .iconfont{
            font-size: 18px;
        }
    }
    .list-song{
        width: 33%;
        box-sizing: border-box;
        float: left;
        padding: 0 1%;
        .img{
            position: relative;
            display:inline-block;
            height: 2rem;
            width: 100%;
        }
        img{
            height: 2rem;
            border-radius: 0.1rem;
            position: relative;
        }
        .play-count{
            width: 100%;
            height: 0.3rem;
            background: rgba(0,0,0,0.1);
            border-radius: 0.1rem 0.1rem 0 0;
            top: 0;
            color: $color-text-l;
            padding: 0.1rem 0;
            text-align: right;
            position: absolute;
            .iconfont{
                color: $color-text-l;
            }
        }
        .text{
            width: 2rem;
            // white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding: 0.1rem 0;
            text-align: left;
            color: #000;
            height: 1rem;
        }
    }
    &-list{
        width: 100%;
        height: 7.5rem;
        .list-item{
            margin-left: 0.05rem;
            
        }
        
    }
    &-radio{
        .img{
            position: relative;
        }
        .radio-type{
            width: 1.5rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            position: absolute;
            top: 1.6rem;
            color: $color-text-l;
        }
    }
}

</style>
