<template>
  <div id="player-header">
    <van-row gutter="20">
      <van-col span="4">
        <i class="iconfont icon-fanhui" @click="goBack"></i>
      </van-col>
      <van-col span="16">
        <h4>{{currentSong.songName}}</h4>
        <p>
          {{currentSong.singer}}
          <i class="iconfont icon-fanhui1"></i>
        </p>
      </van-col>
      <van-col span="4">
        <i class="iconfont icon-fenxiang"></i>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  mounted() {},
  computed: {
    ...mapGetters(['currentSong', 'playerVisible']),
  },

  methods: {
    goBack() {
      // this.$router.go(-1);
      console.log(this.visible);
      this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
#player-header {
  height: 1rem;
  position: fixed;
  text-align: left;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  background: #000;
  box-sizing: border-box;
  color: #fef;
  h4 {
    font-size: $font-size-large-l;
    font-weight: 500;
    line-height: 0.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  p {
    font-size: $font-size-medium;
  }
  .icon-fanhui {
    line-height: 1rem;
    float: left;
    margin: 0 0.2rem;
    font-size: 0.5rem;
  }
  .icon-fenxiang {
    float: right;
    line-height: 1rem;
    float: left;
    margin: 0 0.2rem;
    font-size: 0.5rem;
  }
}
</style>
