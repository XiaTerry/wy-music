<template>
    <div class="list-detail" :style="{background:'url('+playlist.coverImgUrl+') no-repeat center/cover'}">
        <NavBar></NavBar>
        <div class="song-all" >
            <div class="img">
                <img v-lazy="playlist.coverImgUrl">
            </div>
            <div class="text">
                <p>{{playlist.name}}</p>
                <p>
                    <img v-lazy="creator.avatarUrl">
                    <span>{{creator.nickname}} <i class="iconfont icon-fanhui1"></i> </span>
                </p>
            </div>
            <div class="subscrib">
                <van-row type="flex" justify="space-around">
                    <van-col span="6"><i class="iconfont icon-liuyan"></i><br/>{{playlist.trackCount}}</van-col>
                    <van-col span="6"><i class="iconfont icon-fenxiang"></i><br/>{{playlist.shareCount}}</van-col>
                    <van-col span="6"><i class="iconfont icon-Cell-Download"></i><br/>下载</van-col>
                    <van-col span="6"><i class="iconfont icon-liuyan"></i><br/>多选</van-col>
                </van-row>
            </div>
        </div>
        <div class="player-list">
            <ul>
                <li class="song-msg">
                    <div class="icon">
                        <i class="iconfont icon-stop" v-show="isPlayer" @click="player"></i>
                        <i class="iconfont icon-play" v-show="isStop" @click="player"></i>
                    </div>
                    <div class="palyer-count">
                        <h2>播放全部
                            <span style="color:#999">(共{{playlist.trackCount}}首)</span>
                        </h2>
                    </div>
                    <div class="collect">
                        +收藏({{playlist.subscribedCount}})
                    </div>
                </li>
                <li class="item-song" v-for="(item,index) in musicList" :key="item.id">
                    <div class="number">
                        {{index+1}}
                    </div>
                    <div class="song-name" @click="toPlayer(item.id,index)">
                        <p>{{item.name}}</p>
                        <p>{{item.ar[0].name}}</p>
                    </div>
                    <div class="icon">
                        <i class="iconfont icon-sandian"></i>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

import NavBar from "../v-header/NavBar.vue";
import {getRecommendListDetail} from '../../api/recommend.js'
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
    components:{
        NavBar,
    },
    data () {
        return {
            nowId:this.$route.params.id,
            playlist:{},
            creator:{},
            isPlayer:true,
            isStop:false,
        }
    },
    created(){
        this._getRecommendListDetail()
        this.getMusicList(this.playlist)
        // console.log(this.currentSongId)
    },
    mounted(){
        // console.log(this.MusicList)
        this.MusicList()
    },
    computed:{
        ...mapGetters([
            'musicList',
            'currentSongId'
        ])
    },
    methods:{
        _getRecommendListDetail(){
            let id = this.nowId;
            getRecommendListDetail (id).then((res=>{
                this.playlist = res.data.playlist
                this.creator = res.data.playlist.creator
                console.log(res.data.playlist.tracks)
                this.MusicList(res.data.playlist.tracks)
            }))
        },
        player(){
            if(this.isStop==true){
                this.isPlayer = true;
                this.isStop = false;
            }else{
                this.isStop = true;
                this.isPlayer = false;
            }
        },
        toPlayer(id,index){
            this.setCurrentIndex(index)
            this.setCurrentId(id)
            this.$router.push({
                name:'player',
                params:{
                    id:id,
                    index:index
                }
            })
        },
        ...mapMutations({
            MusicList: 'SET_MUSIC_LIST',
            setCurrentIndex: 'SET_CURRENT_INDEX',
            setCurrentId:'setCurrentId'
        }),
        ...mapActions([
        'getMusicList',
    ])
    }
}
</script>

<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
    .list-detail{
        margin-top: 1rem;
        height: 5rem;
         .song-all{
            padding: 0.2rem;
            box-sizing: border-box;
            width: 100%;
            height: 4rem;
            background: rgba(92, 70, 70, 0.6);
            .img{
                width: 30%;
                height: 2.5;
                float: left;
                img{
                    width: 100%;
                    height: 2rem;
                    border-radius: 0.1rem;
                }
            }
            .text{
                text-align: left;
                color: #000;
                float: right;
                width: 70%;
                height: 2rem;
                p:nth-child(1){
                    color: #ffe;
                    font-size:20px;
                    font-weight: 600;
                    padding: 0.2rem;
                    line-height: 0.4rem;
                }
                p:nth-child(2){
                    position: relative;
                    img{
                        height: 0.5rem;
                        border-radius: 50%;
                        padding: 0.1rem;
                    }
                    span{
                        margin-top: 0.15rem;
                        position: absolute;
                        padding: 0.1rem;
                        color: #ffe;
                    }
                }
            }
            .subscrib{
                clear: both;
                height: 1rem;
                color: #ffe;
                .iconfont{
                    line-height: 1rem;
                    font-size: 0.5rem;
                }
            }
        }
        .player-list{
            ul{
                margin-bottom: 1.6rem;
            }
            width: 100%;
            height: 4rem;
            border-radius: 0.2rem 0.2rem 0 0; 
            background: #fff;
            .song-msg{
                border-bottom:1px solid #eee;
                height: 1rem;
                width: 100%;
                border-radius: 0.2rem 0 0 0;
                .icon{
                    width: 15%;
                    height: 1rem;
                    float: left;
                    line-height: 1rem;
                     .iconfont{
                        font-size: 0.5rem;
                    }
                }
                .palyer-count{
                    box-sizing: border-box;
                    height: 1rem;
                    width: 50%;
                    float: left;
                    line-height: 1rem;
                    text-align: left
                }
                .collect{
                    height: 1rem;
                    width: 35%;
                    float: left;
                    line-height: 1rem;
                    background: red;
                    color: $color-text-l;
                    font-size: $font-size-large;
                    border-radius: 0 0.2rem 0 0;
                }
            }
            .item-song{
                height: 1rem;
                width: 100%;
                .number{
                    float: left;
                    width: 15%;
                    height: 1rem;
                    line-height: 1rem;
                }
                .song-name{
                    width: 75%;
                    float: left;
                    height: 1rem;
                    text-align: left;
                    border-bottom: 1px solid #eee;
                   p:nth-child(1){
                       padding: 0.15rem 0;
                       overflow: hidden;
                       text-overflow: ellipsis;
                       white-space: nowrap;
                   }
                   P:nth-child(2){
                       overflow: hidden;
                       text-overflow: ellipsis;
                       white-space: nowrap;
                   }
                   .iconfont{
                       float: right;
                   }
                }
                .icon{
                    width: 10%;
                    height: 1rem;
                    float: left;
                    line-height: 1rem;
                    font-size: 0.5rem;
                }
            }
            
        }
    }
</style>
