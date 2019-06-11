<template>
  <transition name="slide-fade">
    <van-row class="my-dialog" v-show="playerVisible">
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

      <Player></Player>
    </van-row>
  </transition>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import Player from "../player/Player.vue";

export default {
  components: {
    Player
  },

  computed: {
    ...mapGetters(["currentSong", "playerVisible"])
  },

  methods: {
    goBack() {
      this.chagePlayerVisible(false);
    },

    ...mapMutations(["SET_PLAYER_VISIBLE"]),

    ...mapActions(["chagePlayerVisible"])
  }
};
</script>

<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
.slide-fade-enter-active {
  animation: bounce-in 0.8s;
  transition: all 0.3s ease-in;
  transform: scale(-1.5, -1.5);
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  transform: scale(1.5, 1.5);
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
@keyframes bounce-in {
  0% {
    transform: translateY(180px);
  }
  10% {
    transform: translateY(130px);
  }
  25% {
    transform: translateY(70px);
  }
  50% {
    transform: translateY(40px);
  }
  75% {
    transform: translateY(10px);
  }
  100% {
    transform: none;
  }
}
.my-dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9;
}
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
  z-index: 9999;
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
