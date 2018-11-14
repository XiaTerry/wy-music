<template>
    <div class="player-bar">
        <div class="song-describe" @click="toPlayer">
            <img v-lazy="img">
            <div class="song-title">
                <p>
                谁记得
                </p>
                <p>
                    横滑可以切换上下首哦
                </p>
            </div>
        </div>
        <div class="icon">
            <i class="iconfont icon-bofang1" v-show="isPlayer" @click="player"></i>
            <i class="iconfont icon-bofang" v-show="isStop" @click="player"></i>
            <i class="iconfont icon-caidan"></i>
        </div>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            isPlayer:true,
            isStop:false,
            img:"http://p1.music.126.net/eZidSYwW1c8S7IDQjKRgBg==/109951163653489761.jpg"
        }
    },
    methods:{
        player(){
            if(this.isStop==true){
                this.isPlayer = true;
                this.isStop = false;
            }else{
                this.isStop = true;
                this.isPlayer = false;
            }
            
        },
        toPlayer(){
            console.log(123)
        }
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
                font-size: 0.5rem;
                padding: 0 0.2rem;
            }
            .icon-bofang1{
                font-size: 0.5rem;
                right:  0.9rem;
                top: 0.1rem;
                font-size: 0.5rem;
            }
            .icon-bofang{
                position: absolute;
                right:  0.9rem;
                font-size: 0.4rem;
            }
            line-height: 1rem;
            text-align: right;
            width: 35%;
            height: 1rem;
            float: right;
        }
    }
</style>
