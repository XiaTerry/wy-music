<template>
        <ul class="song-list">
        <li>
            <div class="name">   
                <p>列表循环({{musicList.length!=""?musicList.length:0}})</p>
            </div>
            <div class="operation">
                <p>收藏全部</p>
            </div>
        </li>
        <li v-for="item in musicList" :key="item.id">
            <div class="name">
                <p>{{item.name}}</p>-
                <span>{{item.ar[0].name}}</span>
            </div>
            <div class="operation">
                <i class="iconfont icon-close"></i>
            </div>
        </li>
    </ul>
   
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
    data () {
        return {
            
        }
    },
    computed:{
        ...mapGetters([
            'musicList'
        ])
    }
}
</script>


<style lang="scss" scoped>
    .song-list{
        
        li{
            width: 100%;
            height: 1rem;
            box-sizing:border-box;
            padding:0.2rem;
            border-bottom:1px solid #eee;
        }
        .name{
            float: left;
            line-height: 0.6rem;
            p{
                float: left;
                font-size: 16px;
                color: #000;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            span{
                font-size: 12px;

            }
        }
        .operation{
            float:right;
            // color: #000;
            line-height: 0.6rem;
        }
    }
</style>
