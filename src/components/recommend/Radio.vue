<template>
  <van-row class="recommend-radio">
    <h2 @click="toRadio()">
      主播电台
      <i class="iconfont icon-fanhui1"></i>
    </h2>
    <ul>
      <li class="list-song" v-for="(item,index) in radioList" :key="index">
        <div class="img">
          <div class="gradients"></div>
          <img v-lazy="item.picUrl">
          <p class="radio-type">{{item.name}}</p>
        </div>
        <div class="text">
          <p class="name">{{item.name}}</p>
        </div>
      </li>
    </ul>
  </van-row>
</template>

<script>
import { getDjprogram } from '../../api/recommend';
import { ERR_OK } from '../../common/js/config';

export default {
  data() {
    return {
      radioList: [],
    };
  },

  created() {
    this.getDjprogram();
  },

  methods: {
    /**
     * 获取推荐电台数据
     */
    getDjprogram() {
      getDjprogram().then((res) => {
        if (res.status === ERR_OK) {
          this.radioList = res.data.result;
        } else {
          console.error('推荐电台 获取失败');
        }
      });
    },

    /**
     * 点击主播电台去到电台页面
     */
    toRadio() {
      this.$router.push({
        path: '/radio',
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
      // white-space: nowrap;
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
  &-radio {
    .img {
      position: relative;
    }
    .radio-type {
      width: 1.5rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      position: absolute;
      top: 1.6rem;
      color: $color-text-l;
    }
  }
}
</style>
