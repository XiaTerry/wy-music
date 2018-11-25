<template>
    <div id="nav-bar" :style="`background: ${title.bg}`">
        <i class="iconfont icon-fanhui" @click="goBack"></i>
        <h2>{{title.name}}</h2>
    </div>
</template>

<script>
export default {
    data () {
        return {
            currentTitle: 0,
            title:{
                name: '',
                bg: ''
            }
        }
    },
    mounted(){
        console.log(this)
        let baseURI = this.$el.baseURI
        if(baseURI == 'http://localhost:8080/#/djcatelist'){
            this.title.name = '电台分类'
            this.title.bg = '#E3150D'
        }else if(baseURI == 'http://localhost:8080/#/rankingList'){
            this.title.name = '排行榜'
            this.title.bg = '#E3150D'
        }else if(baseURI == 'http://localhost:8080/#/songList'){
            this.title.name = '歌单'
            this.title.bg = '#E3150f'
        }else if(baseURI == 'http://localhost:8080/#/search'){
            this.title.name = '搜索'
            this.title.bg = '#E3150f'
        }
        else{
            this.title.name = '歌单'
            this.title.bg = ''
        }
    },
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
        // background: ;
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
