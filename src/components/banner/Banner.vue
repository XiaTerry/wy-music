<template>
    <van-swipe :autoplay="3000" class="banner">
        <van-swipe-item v-for="(image, index) in images" :key="index" class="img">
            <div class="cover"></div>
            <img v-lazy="image.imageUrl" /><span class="img-title" :style="{background:image.titleColor}">{{image.typeTitle}}</span>
        </van-swipe-item>
    </van-swipe>
</template>
<script>
import {getBanner} from '../../api/radio.js'
import { HOST, ERR_OK } from '../../common/js/config.js'
export default {
    created(){
        this._getBanner()
    },
     data () {
        return {
            images: []
        }
    },
    methods:{
        _getBanner(){
            getBanner().then((res=>{
                if(res.status === ERR_OK){
                    this.images = res.data.banners.slice(0,6)
                }
            }))
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
.banner{
    width: 100%;
    height: 3rem;
    background: #fff;
    position: relative;
    .img{
        &-title{
            opacity: 0.8;
            padding: 0.08rem;
            height: 0.4rem;
            color: #fff;
            position: absolute;
            line-height: 0.4rem;
            border-radius: 0.15rem 0 0.15rem 0;
            bottom: 0.1rem;
            right: 0.15rem;
            
        }
        .cover{
                position: absolute;
                height: 2rem;
                width: 100%;
                background: $color-theme;
                z-index: -1;
            }
        height: 2.5rem;
        position: relative;
    }
    img{
        margin: 0.1rem;
        width: 95%;
        margin-right: 0.1rem;
        border-radius: 0.2rem;
        height: 2.8rem;
    }
}
</style>

