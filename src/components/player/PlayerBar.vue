<template>
<div>
    <div class="player-bar">
        <div class="song-describe" @click="toPlayer">
            <img :src="imgSrc">
            <div class="song-title">
                <p>
                {{songName}}
                </p>
                <!-- <p>
                    横滑可以切换上下首哦
                </p> -->
                <audio  ref="musicAudio" :src="musicSrc" autoplay="autoplay"></audio>
            </div>
        </div>
        <div class="icon">
            <i class="iconfont icon-play" v-show="isPlayer" @click="player"></i>
            <i class="iconfont icon-stop" v-show="isStop" @click="player"></i>
            <i class="iconfont icon-caidan" @click="popup()"></i>
        </div>
    </div>
     <van-popup v-model="show" position="bottom" >
        <PlayList></PlayList>
    </van-popup>
</div>
</template>

<script>
import PlayList from '../playlist/Playlist.vue'
import {mapGetters} from 'vuex'
export default {
    components:{
        PlayList
    },
    data () {
        return {
            isPlayer:false,
            isStop:true,
            show: false,
            img:"http://p1.music.126.net/eZidSYwW1c8S7IDQjKRgBg==/109951163653489761.jpg"
        }
    },
    computed:{
        ...mapGetters([
            'songName',
            'musicSrc',
            'imgSrc'
        ])
    },
    methods:{
        player(){
            const audio = this.$refs.musicAudio
            if(this.isStop==false){
                this.isPlayer = false;
                this.isStop = true;
                audio.play()
            }else{
                this.isStop = false;
                this.isPlayer = true;
                audio.pause()
            }
        },
        toPlayer(){
            this.$router.push({
                path:'/player'
            })
        },
         popup(){
            if(this.show==false){
                this.show=true
            }else{
                this.show=false
            }
        },
    }
}
</script>

<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
    .player-bar{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1rem;
        background: #fff;
        .song-describe{
            .song-title{
                font-size: $font-size-small-ss;
                float: left;
                width: 45%;
                text-align: left;
                box-sizing: border-box;
                padding: 0.1rem 0;
                p{
                    margin: 0.1rem 0;
                }
            }
            img{
                float: left;
                padding: 2%;
                box-sizing: border-box;
                border-radius: 0.2rem; 
                height: 1rem;
                width: 20%;
            }
        }
        .icon{
            position: relative;
            .iconfont{
                font-size: 0.6rem;
                padding: 0 0.2rem;
            }
            line-height: 1rem;
            width: 35%;
            float: right;
        }
    }
    .van-popup--bottom{
        height: 6rem;
        
        width: 100%;
    }
</style>
