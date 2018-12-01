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
            <div id="user" v-show="isShow">
            
            </div>
        </v-touch>
        
        
        <!-- 顶部三导航 推荐 朋友 电台 -->
        <van-row class="title" type="flex" justify="space-around">
            <van-col span="6"><router-link to="/">推荐</router-link></van-col>
            <van-col span="6"><router-link to="/friend">朋友</router-link></van-col>
            <van-col span="6"><router-link to="/radio">电台</router-link></van-col>
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
        }
    },
    methods:{
        openUser(){
            this.isShow = true;
        },
        
        swipeleft(){
            this.isShow = false;
        }
    }
}
</script>


<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
#user{
    position: fixed;
    width: 75%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000;
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
