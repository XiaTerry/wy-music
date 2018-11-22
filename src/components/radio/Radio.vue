<template>
    <div class="radio">
        
        <vheader></vheader>
       <!-- 轮播图 -->
        <Banner></Banner>
        <!-- 分类 排行 电音 电台-->
        <van-row type="flex" justify="space-around" class="radio-menu">
            <van-col span="5">
                <div class="item">
                    <i class="iconfont icon-icon-test1"></i>
                </div>
               电台分类
            </van-col>
            <van-col span="5">
                <div class="item">
                    <i class="iconfont icon-paixing"></i>
                </div>
               电台排行
            </van-col>
            <van-col span="5">
                <div class="item">
                    <i class="iconfont icon-gedan"></i>
                </div>
                DI电音
            </van-col>
            <van-col span="5">
                <div class="item">
                    <i class="iconfont icon-paixing"></i>
                </div>
                小冰电台
            </van-col>
        </van-row>
        <div class="today-priority">
            <h2>今日优选</h2>
            <ul>
                <li class="today-priority-list">
                    <div class="img">
                        <img v-lazy="img">
                    </div>
                    <div class="msg">
                        <h2>小鬼-王琳的</h2>
                        <p>节目:7</p>
                        <p>小鬼-王琳</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {getBanner} from '../../api/radio.js'
import Vheader from "../v-header/V-header.vue"
import Banner from "../banner/Banner.vue"
import { HOST, ERR_OK } from '../../common/js/config.js'
export default {
    components:{
        Vheader,
        Banner
    },
    data () {
        return {
            images: [],
            img: 'http://p2.music.126.net/eZidSYwW1c8S7IDQjKRgBg==/109951163653489761.jpg'
        }
    },
    
}
</script>
<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
.radio{
    margin-top: 1.75rem;
}
.radio-menu{
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
.today-priority{
    >h2{
        margin-top: 0.2rem;
        padding: 0.2rem;
        text-align: left;
        box-sizing: border-box;
        color: #000;
        font-size: $font-size-large;
        font-weight: 800;
    }
    &-list{
        height: 2rem;
        width: 100%;
        .img{
            width: 35%;
            height: 2rem;
            float: left;
            img{
                height: 2rem;
                border-radius: 0.1rem;
            }
        }
        .msg{
            width: 65%;
            height: 2rem;
            float: left;
            text-align: left;
            h2{
                margin: 0.2rem 0;
                color: #000;
                font-size: $font-size-large;
                 font-weight: 800;
            }
            p{
                padding: 0.1rem 0;
                font-size: $font-size-medium;
            }
        }
    }
}
</style>
