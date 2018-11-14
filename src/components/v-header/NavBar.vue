<template>
    <div id="nav-bar">
        <i class="iconfont icon-fanhui" @click="goBack"></i>
        <h2>歌单</h2>
    </div>
</template>

<script>
export default {
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
    #nav-bar {
        height: 1rem;
        position: fixed;
        text-align: left;
        left: 0;
        right: 0;
        top: 0;
        z-index: 1;
        background: #522c05;
        box-sizing: border-box;
        color: $color-text-gg;
        h2{
            font-size: $font-size-large-x;
            font-weight: 500;
            line-height: 1rem;
            
        }
        .iconfont{
            line-height: 1rem;
            float: left;
            margin: 0 0.2rem;
            font-size: 0.5rem;
        }
    }
</style>
