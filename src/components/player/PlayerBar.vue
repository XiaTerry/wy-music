<template>
<div>
    <div class="player-bar">
        <div class="song-describe" @click="play()">
            <img :src="imgSrc" >
            <div class="song-title">
                <p>
                {{songName}}
                </p>
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
import Player from '../player/Player.vue'
import {mapGetters,mapMutations,mapActions} from 'vuex'
import img  from '../../common/image/default.png'
export default {
    props:['Audio'],
    components:{
        PlayList,
        Player
    },
    data () {
        return {
            isPlayer:false,
            isStop:true,
            show: false,
            isShow: false,
            img:"http://p1.music.126.net/eZidSYwW1c8S7IDQjKRgBg==/109951163653489761.jpg"
        }
    },
    mounted(){
       
       
    },
    computed:{
        ...mapGetters([
            'songName',
            'imgSrc',
            'showPlayer'
        ])
    },
    methods:{
        ...mapMutations({
            setShowPlayer: 'setShowPlayer',
        }),
        ...mapActions([
        'getMusicList',
        'selectPlay',
        'getShowPlayer'
        ]),
        play(){
            this.getShowPlayer(true)
           
        },
        player(){
            const audio = this.Audio
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
            if(this.show == false){
                this.show = true
                
            }else{
                this.show = false
            }
        },
        clickOverlay(){
           this.getShowPlayer(false)
        },
        
        
    }
}
</script>

<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
.play{
    background: red;
}
    .player-bar{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1rem;
        background: #fff;
        .song-describe{
            width: 65%;
            float: left;
            .song-title{
                font-size: $font-size-small-ss;
                float: right;
                width: 70%;
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
                width: 30%;
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
