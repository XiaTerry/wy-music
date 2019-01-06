<template>
    <div class="v-header">
        <!-- 顶部导航 -->
        <van-row type="flex" justify="space-between">
            <van-col span="4" class="header-icon">
                    <i class="iconfont icon-caidan" @click="openUser()"></i>
            </van-col>
            <van-col span="2" class="header-icon">
                <router-link to="/music">
                    <i class="iconfont icon-yinyue"></i>
                </router-link>
            </van-col>
            <van-col span="2" class="header-icon">
                <router-link to="/wy">
                    <i class="iconfont icon-wy"></i>
                </router-link>
            </van-col>
            <van-col span="2" class="header-icon">
                <router-link to="/radio">
                    <i class="iconfont icon-shipin"></i>
                </router-link>
            </van-col>
            <van-col span="4" class="header-icon">
                <router-link to="/search" class="search" tag="div">
                    <i class="iconfont icon-sousuo"></i>
                </router-link>
            </van-col>
        </van-row>
        <v-touch @swipeleft="swipeleft" >
            <div class="user" v-show="isShow" @click="btn()">
                <div class="user-title">
                    <img src="" alt="">
                    <h3>转角171015</h3>
                </div>
                <div class="user-content">
                    <ul>
                        <li v-for="(item,index) in user" :key="index">
                            <i></i>{{item}}
                        </li>
                    </ul>
                </div>
                <div class="user-bar">
                    <ul>
                        <li>夜间模式</li>
                        <li>设置</li>
                        <li>退出</li>
                    </ul>
                </div>
            </div>
        </v-touch>
        
        
        <!-- 顶部三导航 推荐 朋友 电台 -->
        <van-row class="title" type="flex" justify="space-around" ref="nav">
            <van-col span="6"><router-link to="/">推荐<div class="bar"></div></router-link></van-col>
            <van-col span="6"><router-link to="/friend">朋友<div class="bar"></div></router-link></van-col>
            <van-col span="6"><router-link to="/radio">电台<div class="bar"></div></router-link></van-col>
        </van-row>
    </div>
</template>


<script>

export default {
    components:{
    },
    data () {
        return {
            isShow:false,
            user:['我的消息','会员中心','商城','游戏推荐','在线听歌免流量'
            ,'我的好友','附近的人','个性换肤','听歌识曲','定时停止播放','扫一扫',
            '音乐闹钟','驾驶模式','亲子频道','小冰电台','音乐云盘','优惠券','加入网易音乐人']     
        }
    },
    mounted(){
        console.log(this.$refs.nav)
        
    },
    methods:{
        openUser(){
            this.isShow = true;
        },
        
        swipeleft(){
            this.isShow = false;
            
        },
        btn(){
            this.isShow = false;
            console.log(123)
        }
    }
}
</script>


<style lang="scss" scoped>
@import "../../common/scss/variable.scss";

.user{
    overflow-y: scroll;
    position: fixed;
    width: 75%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    &-title{
        height: 2.5rem;
        width: 100%;
        background: #eee;
        h3{
            text-align: left;
            padding: 0.2rem;
        }
    }
    &-content{
        background: #eee;
        ul{
            background: #fff;
        }
        li{
            
            text-align: left;
            padding: 0.2rem;
        }
        li:last-child{
            margin-bottom: 1rem;
        }
        
    }
    &-bar{
        border-top: 1px solid #eee;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fff;
        height: 1rem;
        width: 75%;
        li{
            height: 1rem;
            float: left;
            line-height: 1rem;
            width: 33%;
        }
    }
}
.v-header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 1.8rem;
    z-index: 1;
    text-align: center;
    background: $color-theme;
.text {
    line-height: 44px;
    font-weight: bold;
    color: $color-text-l;
    letter-spacing: 3px;
  }
.header-icon{
    padding: 0.2rem;
    .iconfont{
        color: #ffffffa8;
        font-size: 0.5rem;
    }
}
.title{
    padding: 0.2rem;
    margin-top: 0.2rem;
    a{
        width: 0.4rem;
        height: 0.4rem;
        color: #ffffffa8;
        font-size: $font-size-medium-x;
    }
    .bar{
        height: 0.05rem;
        width: 0.6rem;
        margin: 0.1rem auto;
        background: #fff;
    }
}
.mine {
    position: absolute;
    top: -1.5px;
    left: 0;
    .iconfont {
        display: block;
        padding: 0.2rem;
        font-size: 0.5rem;
        color: $color-theme-l;
    }
}
.search {
    position: absolute;
    top: 0;
    right: 2px;
    .iconfont {
        display: block;
        padding: 0.2rem;
        font-size: 0.5rem;
        color: $color-theme-l;
    }
  }
}
</style>
