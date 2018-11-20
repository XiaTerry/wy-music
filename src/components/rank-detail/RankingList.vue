<template>
    <div class="rank-list">
        <NavBar></NavBar>
        <div class="title">
            <h1>官方榜</h1>
        </div>
        <ul class="rank-content">
            <!--  v-for="(item,index) in rankList" :key="index" v-lazy="item.playlist.coverImgUrl"-->
            <li class="list" @click="selectSong(item.id)" v-for="(item,index) in rankList" :key="index">
                <div class="list-left">
                    <img v-lazy="item.coverImgUrl">
                </div>
                <div class="list-right">
                    <ul>
                        <li class="name" v-for="(item,index) in item.tracks" :key="item.id">
                            {{index+1}}.{{item.first}}
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
        <PlayerBar></PlayerBar>
    </div>
</template>

<script>

import { HOST, ERR_OK } from '../../common/js/config.js';
import {getRankDetail} from '../../api/rankingList.js'
import PlayerBar from "../player/PlayerBar.vue";
import NavBar from "../v-header/NavBar.vue";
export default {
    components:{
        PlayerBar,
        NavBar
    },
    data () {
        return {
            rankList:[],
            rankTracks:[],
        }
    },
    mounted(){
        this._getRankDetail()
    },
    methods:{
        selectSong(id){
            this.$router.push({
                path:`/listDetail/${id}`,
            })
        },
        _getRankDetail(){
            getRankDetail().then((res=>{
                if(res.status === ERR_OK){
                    this.rankList = res.data.list
                }else{
                    console.error('获取失败！')
                }
            }))
        },
        getWorldSong(){
            
        }
    }
}
</script>


<style lang="scss" scoped>
    .rank-list{
        width: 100%;
        margin-top: 1rem;
        .title{
            width: 100%;
            height: 1rem;
            padding: 0 0.2rem;
            box-sizing: border-box;
            h1{
                float: left;
                font-size: 20px;
                font-weight: 600;
                line-height: 1rem;
            }
        }
        .rank-content{
            margin-bottom: 1rem;
        }
        .list{
        height: 2rem;
        width: 100%;
        .list-left{
            height: 2rem;
            width: 40%;
            float: left;
            // background: #ff0;
            img{
                width: 100%;
                padding: 0.1rem;
                box-sizing: border-box;
                border-radius: 0.2rem;
                height: 2rem;
            }
        }
        .list-right{
            width: 60%;
            height: 2rem;
            border-bottom: 1px solid #eee;
            float: left;
            padding: 0.3rem 0 0 0;
            box-sizing: border-box;
            .name{
                width: 100%;
                height: 0.5rem;
                text-align: left;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
        
    }
</style>
