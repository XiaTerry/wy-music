<template>
  <van-row>
    <van-row class="player-bar" v-if="!isShowUser">
      <div class="song-describe" @click="showPlayer">
        <img :src="currentSong.imgSrc">
        <div class="song-title">
          <p>{{currentSong.songName}}</p>
        </div>
      </div>
      <div class="icon">
        <i class="iconfont icon-play" v-show="!isPlay" @click="chageIsPlay"></i>
        <i class="iconfont icon-stop" v-show="isPlay" @click="chageIsPlay"></i>
        <i class="iconfont icon-caidan" @click="popup()"></i>
      </div>
    </van-row>
    <van-popup v-model="show" position="bottom">
      <PlayList></PlayList>
    </van-popup>
  </van-row>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import PlayList from '../playlist/Playlist.vue';

export default {
  props: ['Audio'],

  components: {
    PlayList,
  },
  data() {
    return {
      isPlayer: false,
      show: false,
      isShow: false,
      img:
        'http://p1.music.126.net/eZidSYwW1c8S7IDQjKRgBg==/109951163653489761.jpg',
    };
  },

  computed: {
    ...mapGetters(['currentSong', 'isPlay', 'isShowUser']),
  },
  methods: {
    showPlayer() {
      this.chagePlayerVisible(true);
    },

    popup() {
      if (this.show === false) {
        this.show = true;
      } else {
        this.show = false;
      }
    },

    ...mapMutations(['SET_PLAYER_VISIBLE', 'CHANGE_IS_PLAY']),

    ...mapActions(['chagePlayerVisible', 'chageIsPlay']),
  },
};
</script>

<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
.play {
  background: red;
}
.player-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1rem;
  background: #fff;

  .song-describe {
    width: 65%;
    float: left;
    .song-title {
      font-size: $font-size-small-ss;
      float: right;
      width: 70%;
      text-align: left;
      box-sizing: border-box;
      padding: 0.1rem 0;
      p {
        margin: 0.1rem 0;
      }
    }
    img {
      float: left;
      padding: 2%;
      box-sizing: border-box;
      border-radius: 0.2rem;
      height: 1rem;
      width: 30%;
    }
  }
  .icon {
    position: relative;
    .iconfont {
      font-size: 0.6rem;
      padding: 0 0.2rem;
    }
    line-height: 1rem;
    width: 35%;
    float: right;
  }
}
.van-popup--bottom {
  height: 6rem;
  width: 100%;
}
</style>
