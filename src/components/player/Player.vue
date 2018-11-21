<template>
    <div id="player" >
        <PlayerHeader></PlayerHeader>
        
        <div class="disc" >
           <transition>
            <div class="one rotate" ref="disc">
                <div class="two">
                    <div class="three">
                        <div class="four">
                            <img :src="imgSrc">
                        </div>
                    </div>
                </div>
            </div>
            </transition>
        </div>
        <div class="player-bar">
            <van-row class="palyer-msg" type="flex" justify="center">
                <van-col span="5"><i class="iconfont icon-heart"></i></van-col>
                <van-col span="5"><i class="iconfont icon-Cell-Download"></i></van-col>
                <van-col span="5"><i class="iconfont icon-liuyan"></i></van-col>
                <van-col span="5"><i class="iconfont icon-sandian"></i></van-col>
            </van-row>
            <div class="progress-bar">
                <span class="progress-time">{{format(currentTime)}}</span>
                <div class="progress-center">
                     <div class="progress">
                        <span class="progress-l" :style="'width:'+ num * 1 +'%;'">
                            <span class="pivot" @mousemove="getTime()"><span></span></span>
                        </span>
                    </div>
                </div>
                <span class="progress-sumtime">{{format(duration)}}</span>
            </div>
            <van-row class="palyer-type" type="flex" justify="center">
                <van-col span="5"><i class="iconfont icon-liebiaoxunhuan1"></i></van-col>
                <van-col span="5"><i @click="prev" class="iconfont icon-shangyiqu"></i></van-col>
                <van-col span="5">
                    <i  @click="player" class="iconfont icon-play" v-show="isPlay"></i>
                    <i @click="player" class="iconfont icon-stop" v-show="isStop"></i>
                </van-col>
                <van-col span="5"><i @click="next()"  class="iconfont icon-xiayiqu"></i></van-col>
                <van-col span="5" ><i @click="popup()" class="iconfont icon-caidan"></i></van-col>
            </van-row>
        </div>
        <van-popup v-model="show" position="bottom">
            <PlayList></PlayList>
        </van-popup>
        <audio  ref="musicAudio" :src="musicSrc" autoplay="autoplay" class="audio-ctrl" @timeupdate="updateTime"></audio>
    </div>
</template>

<script>
import { HOST, ERR_OK } from '../../common/js/config.js'
import PlayList from '../playlist/Playlist.vue'
import {getSongDetail,getSong} from '../../api/player.js'
import {mapGetters, mapMutations, mapActions} from 'vuex'
import PlayerHeader from './PlayerHeader.vue'
export default {
    components:{
        PlayerHeader,
        PlayList
    },
    data () {
        return {
            show: false,
            isPlay:false,
            isStop:true,
            picUrl:"",
            // audio:null,
            duration:0,
            currentTime:0,
            min:'0',
            sec:0,
            num:0,
            
        }
    },
    watch:{
        currentTime () {
            
        }
    },
    mounted(){
        this.$root.$children[0].isShow = false
        // this.audio = this.$root.$children[0].$refs.player.$refs.musicAudio
        let audio = this.$refs.musicAudio
        this.currentTime = audio.currentTime
        console.log(this.audio)
        // console.log(this.$refs)
        
    },
    beforeDestroy(){
        this.$root.$children[0].isShow = true
        // this.duration = this.audio.duration
    },
    created(){
        this._getSongDetail()
        this._getSong()
    },
    destroyed(){
        // console.log(this)
    },
    computed:{
        ...mapGetters([
        'nowIndex',
        'musicList',
        'currentSongId',
        'musicSrc',
        'imgSrc'
    ])
    },
    methods:{
        _getSongDetail(){
           
            getSongDetail(this.currentSongId).then((res=>{
                this.getImgSrc(res.data.songs[0].al.picUrl)
                this.getSongName(res.data.songs[0].name)
                this.getSinger(res.data.songs[0].ar[0].name)
            }))
        },
        _getSong(){
            getSong(this.currentSongId).then((res=>{
               this.getSongUrl(res.data.data[0].url)
            }))
        },
        getTime(){
            // console.log(this.num)
        },
        popup(){
            if(this.show==false){
                this.show=true
            }else{
                this.show=false
            }
        },
        //点击播放和暂停
        player(){
            let audio =this.$refs.musicAudio
            if(this.isStop == false){
                this.isStop = true
                this.isPlay = false
                this.$refs.disc.className="one rotate"
                // this.audio.play()
                audio.play()
            }else{
                this.isStop = false
                this.isPlay = true
                // this.audio.pause()
                audio.pause()
                this.$refs.disc.className="one"
            }
            
        },
        //点击上一曲
        prev(){
            let audio =this.$refs.musicAudio
            this.duration = audio.duration
            this.currentTime = audio.currentTime
            let index = this.nowIndex-1
            if(this.nowIndex==-1){
                index = this.musicList.length-1
            }
            this.setCurrentIndex(index)
            // console.log(this.audio)
            // console.log(index)
            this.selectPlay(index)
            this.setCurrentId(this.musicList[index].id)
            this._getSongDetail()
            this._getSong()
            // console.log(this.musicList[index].id)
        },
        //点击下一曲
        next(){
            let audio =this.$refs.musicAudio
            this.duration = audio.duration
            this.currentTime = audio.currentTime
            let index = this.nowIndex+1
            if(index==this.musicList.length){
                index = 0
            }
            this.selectPlay(index)
            this.setCurrentId(this.musicList[index].id)
            this._getSongDetail()
            this._getSong()
            
        },
        ...mapMutations({
            setCurrentIndex: 'SET_CURRENT_INDEX',
            setCurrentId:'setCurrentId',
            getSongName:'getSongName',
            getSinger:'getSinger',
            getSongUrl:'getSongUrl',
            getImgSrc:'getImgSrc'
        }),
        ...mapActions([
        'getMusicList',
        'selectPlay',
        ]),
        format (interval) {
            interval = interval | 0
            let minute = interval / 60 | 0
            let second = interval % 60
            if (second < 10) {
                second = '0' + second
            }
            return minute + ':' + second
        },
        updateTime (e) {
            if (this.move) {
                return
            }
            this.currentTime = e.target.currentTime
            this.num = this.currentTime
        },
    }
}
</script>

<style lang="scss" scoped>
    @keyframes rotate-disk {
        0%{
            transform: rotateZ(0deg)
        }
        100%{
            transform: rotateZ(360deg)
        }
    }
    #player{
        margin-top: 1rem;
        width: 100%;
        height: 10rem;
        .disc{
            width: 100%;
            height: 71%;
            background: rgba(0,0,0,0.3);
            position: relative;
            .rotate{
                animation: rotate-disk 20s infinite normal linear; 
            }
            .one{
                margin: auto;
                width: 4rem;
                height: 4rem;
                border-radius: 50%;
                background: #000;
                border:4px solid #333;
                position: absolute;
                left: 50%;
                top: 50%;
                margin-left: -2rem;
                margin-top: -2rem;
                .two{
                    height: 3.5rem;
                    width: 3.5rem;
                    background: #000;
                    border:1px solid #eee;
                    position:absolute;
                    border-radius: 50%;
                    margin-top: 0.25rem;
                    margin-left: 0.25rem;
                    .three{
                        height: 3rem;
                        width: 3rem;
                        background: #000;
                        border:1px solid #eee;
                        position:absolute;
                        border-radius: 50%;
                        margin-top: 0.25rem;
                        margin-left: 0.25rem;
                        .four{
                            height: 2.5rem;
                            width: 2.5rem;
                            background: green;
                            position:absolute;
                            border-radius: 50%;
                            margin-top: 0.25rem;
                            margin-left: 0.25rem;
                            img{
                                height: 2.5rem;
                                width: 2.5rem;
                                border-radius: 50%;
                            }
                        }
                    }
                }
            }
        }
        .player-bar{
            position:fixed;
            left: 0;
            right: 0;
            margin-bottom: 0;
            background: rgba(0,0,0,0.3);
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
                            // width: 170px;
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
                .icon-stop,
                {
                    font-size: 0.8rem;
                }
                .icon-play{
                    font-size: 0.8rem;
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
        
        width: 100%;
    }
    
</style>
