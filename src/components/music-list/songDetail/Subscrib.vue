<template>
  <div class="song-all">
    <div class="img">
      <img v-lazy="playlist.coverImgUrl">
    </div>
    <div class="text">
      <p>{{playlist.name}}</p>
      <p>
        <img v-lazy="creator.avatarUrl">
        <span>
          {{creator.nickname}}
          <i class="iconfont icon-fanhui1"></i>
        </span>
      </p>
    </div>
    <div class="subscrib">
      <van-row type="flex" justify="space-around">
        <van-col span="6">
          <i class="iconfont icon-liuyan"></i>
          <br>
          {{playlist.trackCount}}
        </van-col>
        <van-col span="6">
          <i class="iconfont icon-fenxiang"></i>
          <br>
          {{playlist.shareCount}}
        </van-col>
        <van-col span="6">
          <i class="iconfont icon-Cell-Download"></i>
          <br>下载
        </van-col>
        <van-col span="6">
          <i class="iconfont icon-liuyan"></i>
          <br>多选
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Subscrib',
  props: {
    playlist: { type: Object },
    creator: { type: Object },
  },
};
</script>

<style lang="scss" scoped>
.song-all {
  padding: 0.2rem;
  box-sizing: border-box;
  width: 100%;
  height: 4rem;
  background: rgba(92, 70, 70, 0.6);
  .img {
    width: 30%;
    height: 2.5;
    float: left;
    img {
      width: 100%;
      height: 2rem;
      border-radius: 0.1rem;
    }
  }
  .text {
    text-align: left;
    color: #000;
    float: right;
    width: 70%;
    height: 2rem;
    p:nth-child(1) {
      color: #ffe;
      font-size: 20px;
      font-weight: 600;
      padding: 0.2rem;
      line-height: 0.4rem;
    }
    p:nth-child(2) {
      position: relative;
      img {
        height: 0.5rem;
        border-radius: 50%;
        padding: 0.1rem;
      }
      span {
        margin-top: 0.15rem;
        position: absolute;
        padding: 0.1rem;
        color: #ffe;
      }
    }
  }
  .subscrib {
    clear: both;
    height: 1rem;
    color: #ffe;
    .iconfont {
      line-height: 1rem;
      font-size: 0.5rem;
    }
  }
}
</style>
