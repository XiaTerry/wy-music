<template>
    <div id="player">
        <PlayerHeader :getName="name" :getArName="arName"></PlayerHeader>
        {{nowIndex}}<button @click="selectPlay">加1</button>
        <audio  ref="musicAudio" :src="musicSrc"  class="audio-ctrl"></audio>
        <div class="disc">
            <div class="one">
                <div class="two">
                    <div class="three">
                        <div class="four">
                            <img v-lazy="picUrl">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="player-bar">
            <van-row class="palyer-msg" type="flex" justify="center">
                <van-col span="5"><i class="iconfont icon-heart"></i></van-col>
                <van-col span="5"><i class="iconfont icon-Cell-Download"></i></van-col>
                <van-col span="5"><i class="iconfont icon-liuyan"></i></van-col>
                <van-col span="5"><i class="iconfont icon-sandian"></i></van-col>
            </van-row>
            <div class="progress-bar">
                <span class="progress-time">02:16</span>
                <div class="progress-center">
                     <div class="progress">
                        <span class="progress-l" ref="porgress">
                            <span class="pivot" @click="getTime()"><span></span></span>
                        </span>
                    </div>
                </div>
                <span class="progress-sumtime">03:06</span>
            </div>
            <van-row class="palyer-type" type="flex" justify="center">
                <van-col span="5"><i class="iconfont icon-liebiaoxunhuan1"></i></van-col>
                <van-col span="5"><i @click="prev" class="iconfont icon-shangyiqu"></i></van-col>
                <van-col span="5">
                    <i  @click="play()" class="iconfont icon-bofang1" v-show="isPlay"></i>
                    <i @click="pause()" class="iconfont icon-bofang" v-show="!isPlay"></i>
                </van-col>
                <van-col span="5"><i class="iconfont icon-xiayiqu"></i></van-col>
                <van-col span="5" ><i @click="popup()" class="iconfont icon-caidan"></i></van-col>
            </van-row>
        </div>
        <van-popup v-model="show" position="bottom">
            <ul class="song-list">
                <li>4</li>
                <li>4</li>
                <li>4</li>
                <li>4</li>
                <li>4</li>
                <li>4</li>
                <li>4</li>
                <li>4</li>
                <li>4</li>
            </ul>
        </van-popup>
    </div>
</template>

<script>
import { HOST, ERR_OK } from '../../common/js/config.js';
import {getSongDetail,getSong} from '../../api/player.js'
import {mapGetters, mapMutations, mapActions} from 'vuex'
import PlayerHeader from './PlayerHeader.vue'
export default {
    components:{
        PlayerHeader
    },
    data () {
        return {
            nowId:this.$route.params.id,
            name:'',
            arName:'',
            show: false,
            musicSrc:"",
            isPlay:true,
            picUrl:""
        }
    },
    mounted(){
        // commit('setCurrentIndex')
        console.log(this.$store._actions.selectPlay)
    },
    created(){
        this._getSongDetail()
        this._getSong()
    },
    computed:{
        ...mapGetters([
        'nowIndex',
    ])
    },
    methods:{
        _getSongDetail(){
            let id = this.nowId
            getSongDetail(id).then((res=>{
                console.log(res.data.songs[0])
                this.picUrl = res.data.songs[0].al.picUrl
                this.name = res.data.songs[0].name
                this.arName = res.data.songs[0].ar[0].name
            }))
        },
        _getSong(){
            let id = this.nowId
            getSong(id).then((res=>{
                this.musicSrc = res.data.data[0].url
            }))
        },
        getTime(){
            // console.log(this.$refs.porgress.style)
        },
        popup(){
            if(this.show==false){
                this.show=true
            }else{
                this.show=false
            }
        },
        //点击播放
        play(){
            this.$refs.musicAudio.play();
            this.isPlay = false
        },
        //点击暂停
        pause(){
            this.$refs.musicAudio.pause();
            this.isPlay = true
        },
        //点击上一曲
        prev(){

        },
        ...mapMutations({
            setCurrentIndex: 'SET_CURRENT_INDEX',
        }),
        ...mapActions([
        'selectPlay',
        'deleteFavoriteList',
        'savePlayHistory'
    ])
    }
}
</script>

<style lang="scss" scoped>
    #player{
        margin-top: 1rem;
        width: 100%;
        height: 100%;
        .disc{
            width: 100%;
            height: 7.2rem;
            background: rgba(0,0,0,0.4);
            position: relative;
            .one{
                // transform-origin: 4rem;
                transform: rotateZ(360deg);
                transition: all  ease-in-out; 
                margin: auto;
                width: 4.5rem;
                height: 4.5rem;
                border-radius: 50%;
                background: #000;
                border:4px solid #333;
                position: absolute;
                left: 50%;
                top: 50%;
                margin-left: -2.25rem;
                margin-top: -2.25rem;
                .two{
                    height: 4rem;
                    width: 4rem;
                    background: #000;
                    border:1px solid #eee;
                    position:absolute;
                    border-radius: 50%;
                    margin-top: 0.25rem;
                    margin-left: 0.25rem;
                    .three{
                        height: 3.5rem;
                        width: 3.5rem;
                        background: #000;
                        border:1px solid #eee;
                        position:absolute;
                        border-radius: 50%;
                        margin-top: 0.25rem;
                        margin-left: 0.25rem;
                        .four{
                            height: 3rem;
                            width: 3rem;
                            background: green;
                            position:absolute;
                            border-radius: 50%;
                            margin-top: 0.25rem;
                            margin-left: 0.25rem;
                            img{
                                height: 3rem;
                                border-radius: 50%;
                            }
                        }
                    }
                }
            }
        }
        .player-bar{
            height: 3.2rem;
            position:fixed;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.4);
            .palyer-msg{
                height: 1.5rem;
            }
            .progress-bar{
                height: 0.3rem;
                width: 100%;
                .progress-time{
                    font-size: 12px;
                    width: 15%;
                    float: left;
                    color: #fff;
                }
                .progress-center{
                    float: left;
                    width: 70%;
                    .progress{
                        margin-top: 0.1rem;
                        height: 1px;
                        position: relative;
                        border-radius: 1px;
                        background: #ffe;
                        .progress-l{
                            position: absolute;
                            width: 170px;
                            left: 0;
                            height: 100%;
                            border-radius: inherit;
                            background: red;
                            .pivot{
                                margin-top: -0.12rem;
                                position: absolute;
                                border-radius: 50%;
                                right: 0;
                                background: #fff;
                                height: 0.25rem;
                                width: 0.25rem;
                                span{
                                    width: 3px;
                                    height: 3px;
                                    background: red;
                                    position: absolute;
                                    border-radius: 50%;
                                    top: 40%;
                                    right: 40%;
                                }
                            }
                            
                        }
                    }
                }
                .progress-sumtime{
                    width: 15%;
                    text-align: center;
                    font-size: 12px;
                    float: left;
                    color: #ffe;
                }
            }
            .palyer-type{
                height: 1.5rem;
                .icon-bofang1,
                {
                    font-size: 0.8rem;
                }
                .icon-bofang{
                    font-size: 0.7rem;
                }
            }
        }
    }
    
    .iconfont{
        color: #fff;
        line-height: 1.5rem;
        font-size: 0.5rem;
    }
    .van-popup--bottom{
        height: 6rem;
        border-radius: 0.2rem 0.2rem 0 0;
        width: 100%;
    }
    .song-list{
        li{
            height: 1rem;
            width: 100%;
            color: #000;
        }
    }
</style>
