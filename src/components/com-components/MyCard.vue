<template>
  <div class="my-card__body">
    <div class="img">
      <img v-lazy="picUrl" class="image">
      <div class="play-count" v-if="showPlayCount">
        <i class="iconfont icon-ting"></i>
        <span>{{Math.floor(playCount / 10000) }}万</span>
      </div>
      <div class="img-desc" v-if="showDesc">
        <div class="desc">{{imgDesc}}</div>
      </div>
    </div>
    <div class="text-desc">
      <div class="name">{{textDesc}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyCard',
  props: {
    header: {},

    playCount: {
      type: Number,
      default: 1000000,
    },

    showPlayCount: {
      type: Boolean,
      default: true,
    },
    showDesc: {
      type: Boolean,
      default: true,
    },

    imgDesc: {
      type: String,
      default: '',
    },

    textDesc: {
      type: String,
      default: '',
    },

    picUrl: {
      type: String,
      default:
        'http://p2.music.126.net/eZidSYwW1c8S7IDQjKRgBg==/109951163653489761.jpg',
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
.my-card__body {
  float: left;
  width: 33%;
  box-sizing: border-box;
  padding: 0 1%;
  .img {
    height: 2rem;
    width: 2rem;
    position: relative;
    .image {
      width: 100%;
      display: block;
      border-radius: 0.1rem;
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
        margin-right: 5px;
      }
    }
  }
  .img-desc {
    width: 100%;
    position: absolute;
    top: 1.6rem;
    .desc {
      width: 1.5rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0.1rem 0;
      color: #fff;
      font-size: 13px;
    }
  }
  .text-desc {
    width: 100%;
    .name {
      padding: 0.1rem 0;
      text-align: left;
      font-size: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
