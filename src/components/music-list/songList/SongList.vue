<template>
  <div class="song-list">
    <NavBar></NavBar>
    <div class="song-all">
      <div class="img">
        <img v-lazy="img">
      </div>
      <div class="text">
        <p>精品歌单</p>
        <p>浪漫主义 &nbsp; 献给爱与美</p>
        <p>你是那美丽，我把爱献给你</p>
      </div>
    </div>
    <ul class="song">
      <li
        class="song-box"
        @click="selectSong(item.id)"
        v-for="(item,index) in songList"
        :key="index"
      >
        <div class="img">
          <img v-lazy="item.picUrl">
        </div>
        <p class="play-count">
          <i class="iconfont icon-ting"></i>
          {{Math.floor(item.playCount / 10000) }}万
        </p>
        <p class="small-title">
          <i class="iconfont icon-huiyuan1"></i>
          <i class="iconfont icon-heart"></i>
        </p>
        <p class="name">{{item.name}}</p>
      </li>
    </ul>
    <PlayerBar></PlayerBar>
  </div>
</template>
<script>
import PlayerBar from '../../player/PlayerBar.vue';
import NavBar from '../../v-header/NavBar.vue';
import { getRecommendList } from '../../../api/recommend';
import { ERR_OK } from '../../../common/js/config';

export default {
  name: 'SongList',
  components: {
    NavBar,
    PlayerBar,
  },
  data() {
    return {
      songList: [],
      img:
        'http://p1.music.126.net/DCyf-5chgGn1gX3DYRiXEQ==/109951163651258067.jpg',
    };
  },

  created() {
    this.getRecommendList();
  },

  methods: {
    selectSong(id) {
      this.$router.push({
        path: '/songList/listDetail',
        query: {
          id,
        },
      });
    },
    getRecommendList() {
      getRecommendList().then((res) => {
        if (res.status === ERR_OK) {
          this.songList = res.data.result;
        } else {
          console.error('推荐歌曲 获取失败');
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../../common/scss/variable.scss";
body {
  height: 100% !important;
}
.song-list {
  margin-top: 1rem;
  width: 100%;
  .song-all {
    padding: 0.2rem;
    box-sizing: border-box;
    width: 100%;
    height: 2.5rem;
    background: linear-gradient(to right, #522c05, #100801f0, #100801f0);
    .img {
      width: 30%;
      height: 100%;
      float: left;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text {
      text-align: left;
      color: $color-text-l;
      float: right;
      width: 70%;
      height: 100%;
      p:nth-child(1) {
        font-size: $font-size-large-x;
        padding: 0.2rem;
      }
      p:nth-child(2) {
        padding: 0.1rem 0.2rem;
        font-size: $font-size-large;
      }
      p:nth-child(3) {
        font-size: $font-size-medium;
        padding: 0.1rem 0.2rem;
        color: $color-text-ll;
      }
    }
  }
  .song {
    width: 100%;
    height: 100%;
    li:last-child {
      margin-bottom: 1rem;
    }
  }
  .song-box {
    width: 50%;
    height: 3.5rem;
    padding: 1%;
    float: left;
    box-sizing: border-box;
    text-align: left;
    position: relative;
    .img {
      position: relative;
      width: 100%;
      height: 2.5rem;
      img {
        width: 100%;
        border-radius: 0.1rem;
        height: 2.5rem;
      }
    }
    .play-count {
      padding: 0.1rem;
      color: $color-text-l;
      position: absolute;
      top: 0.1rem;
      right: 0.1rem;
    }
    .small-title {
      position: absolute;
      padding: 0.1rem;
      bottom: 1rem;
      color: $color-text-l;
    }
    .name {
      padding: 0.2rem 0.1rem;
    }
  }
}
</style>
