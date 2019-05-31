<template>
  <van-row class="recommend-music">
    <h2>
      最新音乐
      <i class="iconfont icon-fanhui1"></i>
    </h2>
    <ul>
      <li class="list-song" v-for="item in newList" :key="item.id">
        <div class="img">
          <div class="gradients"></div>
          <img v-lazy="img">
        </div>
        <div class="text">
          <p class="name">{{item.name}}</p>
        </div>
      </li>
    </ul>
  </van-row>
</template>

<script>
import { getRecommendMusic } from '../../api/recommend';
import { ERR_OK } from '../../common/js/config';

export default {
  data() {
    return {
      newList: [],
      img:
        'http://p2.music.126.net/eZidSYwW1c8S7IDQjKRgBg==/109951163653489761.jpg',
    };
  },

  created() {
    this.getRecommendMusic();
  },

  methods: {
    // 获取最新音乐数据
    getRecommendMusic() {
      getRecommendMusic().then((res) => {
        if (res.status === ERR_OK) {
          this.newList = res.data.result.slice(0, 6);
        } else {
          console.error('最新音乐 获取失败');
        }
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
}
</style>
