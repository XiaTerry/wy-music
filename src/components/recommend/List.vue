<template>
  <van-row class="recommend-list">
    <h2 @click="toAllList()">
      推荐歌单
      <i class="iconfont icon-fanhui1"></i>
    </h2>
    <ul class="list-item">
      <li
        class="list-song"
        @click="selectSong(item.id)"
        v-for="item in recommendList"
        :key="item.id"
      >
        <div class="img">
          <div class="gradients"></div>
          <img v-lazy="item.picUrl">
          <p class="play-count">
            <i class="iconfont icon-ting"></i>
            {{Math.floor(item.playCount / 10000) }}万
          </p>
        </div>
        <div class="text">
          <p class="name">{{item.name}}</p>
        </div>
      </li>
    </ul>
  </van-row>
</template>

<script>
import { getRecommendList } from '../../api/recommend';
import { ERR_OK } from '../../common/js/config';

export default {
  data() {
    return {
      recommendList: [],
    };
  },

  created() {
    this.getRecommendList();
  },

  methods: {
    /**
     * 获取推荐歌曲数据
     */
    getRecommendList() {
      getRecommendList().then((res) => {
        if (res.status === ERR_OK) {
          this.songList = res.data;
          this.recommendList = res.data.result.slice(0, 6);
        } else {
          console.error('推荐歌曲 获取失败');
        }
      });
    },

    /**
     * 点击推荐歌单去歌单页面
     */
    toAllList() {
      this.$router.push({
        path: '/songList',
      });
    },

    /**
     * 点击获取详情推荐歌单列表
     */
    selectSong(id) {
      this.$router.push({
        path: 'songList/listDetail',
        query: {
          id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
$con: "06";
.recommend {
  h2 {
    padding: 0.4rem 0.2rem 0.3rem 0.2rem;
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    font-size: $font-size-large;
    font-weight: 800;
    color: #000;
    .iconfont {
      font-size: 18px;
    }
  }
  .list-song {
    width: 33%;
    box-sizing: border-box;
    float: left;
    padding: 0 1%;
    .img {
      position: relative;
      display: inline-block;
      height: 2rem;
      width: 100%;
    }
    img {
      height: 2rem;
      border-radius: 0.1rem;
      position: relative;
    }
    .play-count {
      width: 100%;
      height: 0.3rem;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 0.1rem 0.1rem 0 0;
      top: 0;
      color: $color-text-l;
      padding: 0.1rem 0;
      text-align: right;
      position: absolute;
      .iconfont {
        color: $color-text-l;
      }
    }
    .text {
      width: 2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0.1rem 0;
      text-align: left;
      color: #000;
      height: 1rem;
    }
  }
  &-list {
    width: 100%;
    height: 7.5rem;
    .list-item {
      margin-left: 0.05rem;
    }
  }
}
</style>
