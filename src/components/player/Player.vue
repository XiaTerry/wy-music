<template>
  <transition name="slide-fade">
    <van-row id="player">
      <van-row class="disc">
        <v-touch @swipeleft="swipeleft" @swiperight="swiperight">
          <transition>
            <div class="one" ref="disc">
              <div class="two">
                <div class="three">
                  <div class="four">
                    <img :src="currentSong.imgSrc">
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </v-touch>
      </van-row>

      <van-row class="player-bar">
        <van-row class="palyer-msg" type="flex" justify="center">
          <van-col span="5">
            <i class="iconfont icon-heart"></i>
          </van-col>
          <van-col span="5">
            <i class="iconfont icon-Cell-Download"></i>
          </van-col>
          <van-col span="5">
            <i class="iconfont icon-liuyan"></i>
          </van-col>
          <van-col span="5">
            <i class="iconfont icon-sandian"></i>
          </van-col>
        </van-row>
        <div class="progress-bar">
          <span class="progress-time">{{format(currentTime)}}</span>
          <div class="progress-center">
            <div class="progress">
              <span class="progress-l" :style="'width:'+ num +'%;'">
                <span class="pivot" @mousemove="getTime()">
                  <span></span>
                </span>
              </span>
            </div>
          </div>
          <span class="progress-sumtime">{{format(duration)}}</span>
        </div>
        <van-row class="palyer-type" type="flex" justify="center">
          <van-col span="5">
            <i @click="changeModeIcon" class="iconfont" :class="iconMode"></i>
          </van-col>
          <van-col span="5">
            <i @click="prev" class="iconfont icon-shangyiqu"></i>
          </van-col>
          <van-col span="5">
            <i @click="chageIsPlay" class="iconfont icon-play" v-show="!isPlay"></i>
            <i @click="chageIsPlay" class="iconfont icon-stop" v-show="isPlay"></i>
          </van-col>
          <van-col span="5">
            <i @click="next()" class="iconfont icon-xiayiqu"></i>
          </van-col>
          <van-col span="5">
            <i @click="popup()" class="iconfont icon-caidan"></i>
          </van-col>
        </van-row>
      </van-row>
      <van-popup v-model="show" position="bottom">
        <PlayList></PlayList>
      </van-popup>

      <audio
        ref="musicAudio"
        :src="currentSong.songUrl"
        autoplay="autoplay"
        class="audio-ctrl"
        @timeupdate="updateTime"
      ></audio>
    </van-row>
  </transition>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import PlayList from '../playlist/Playlist.vue';
import { getSongDetail, getSong } from '../../api/player';

export default {
  name: 'Player',
  components: {
    PlayList,
  },
  data() {
    return {
      isShow: true,
      show: false,
      iconMode: 'icon-icon-test',
      mode: '',
      isRadom: true,
      isPlayer: false,
      isLoop: true,
      picUrl: '',
      duration: '',
      currentTime: 0,
      num: 0,
    };
  },

  mounted() {
    this.addEventListeners();
  },

  beforeDestroy() {
    this.removeEventListeners();
  },
  created() {
    this.getCurrentSong();
  },

  computed: {
    ...mapGetters([
      'nowIndex',
      'currentSongId',
      'currentSong',
      'musicList',
      'isPlay',
    ]),
  },

  watch: {
    /**
     * 歌曲id改变就调用获取歌曲信息
     */
    currentSongId: 'getCurrentSong',

    /**
     * 通过当前索引设置当前歌曲id
     */
    nowIndex(val) {
      this.setCurrentSongId(this.musicList[val].id);
    },

    isPlay(val) {
      const { disc } = this.$refs;
      const audio = this.$refs.musicAudio;
      if (val) {
        disc.style.animationPlayState = 'running';
        audio.play();
      } else {
        disc.style.animationPlayState = 'paused';
        audio.pause();
      }
    },
  },
  methods: {
    addEventListeners() {
      const that = this;
      that.$refs.musicAudio.addEventListener('timeupdate', that.setCurrentTime);
      that.$refs.musicAudio.addEventListener('canplay', that.setDurationTime);
    },

    removeEventListeners() {
      const that = this;
      that.$refs.musicAudio.removeEventListener(
        'timeupdate',
        this.setCurrentTime,
      );
      that.$refs.musicAudio.removeEventListener(
        'canplay',
        this.setDurationTime,
      );
    },

    setCurrentTime() {
      this.currentTime = this.$refs.musicAudio.currentTime;
    },

    setDurationTime() {
      this.duration = this.$refs.musicAudio.duration;
    },
    /**
     * 通过当前歌曲id获取歌曲信息
     */
    getCurrentSong() {
      let songMap = null;
      const myStorage = window.localStorage;
      if (this.currentSongId) {
        Promise.all([
          getSong(this.currentSongId),
          getSongDetail(this.currentSongId),
        ]).then((res) => {
          songMap = {
            songUrl: res[0].data.data[0].url,
            imgSrc: res[1].data.songs[0].al.picUrl,
            songName: res[1].data.songs[0].name,
            singer: res[1].data.songs[0].ar[0].name,
          };
          this.setCurrentSong(songMap);
          myStorage.setItem('songMap', JSON.stringify(songMap));
        });
      } else {
        songMap = JSON.parse(myStorage.getItem('songMap'));
        this.setCurrentSong(songMap);
      }
    },

    popup() {
      if (this.show === false) {
        this.show = true;
      } else {
        this.show = false;
      }
    },

    /**
     * 点击播放和暂停并且改变播放状态动画
     */

    // 点击上一曲
    prev() {
      this.changeNowIndex('prev');
      console.log(this.musicList);
      if (this.nowIndex === -1) {
        this.setNowIndex(this.musicList.length - 1);
      }
      if (this.modeVal === 2) {
        this.randomPlay();
      }
    },
    swipeleft() {
      this.next();
    },
    swiperight() {
      this.prev();
    },
    // 点击下一曲
    next() {
      this.changeNowIndex('next');
      if (this.nowIndex === this.musicList.length) {
        this.setNowIndex(0);
      }

      if (this.modeVal === 2) {
        this.randomPlay();
      }
    },

    // 随机播放
    randomPlay() {
      const rand = Math.round(Math.random() * this.musicList.length);
      this.setNowIndex(rand);
    },

    playMode() {
      const audio = this.$refs.musicAudio;

      if (this.modeVal === 0) {
        audio.loop = true;
      } else if (this.modeVal === 1) {
        audio.loop = false;
      } else {
        audio.loop = false;
      }
    },

    changeModeIcon() {
      this.modeVal++;

      if (this.modeVal === -1) {
        this.modeVal = 2;
      }

      if (this.modeVal === 3) {
        this.modeVal = 0;
      }

      switch (this.modeVal) {
        case 0: // 单曲循环
          this.iconMode = 'icon-icon-test';
          break;
        case 1: // 列表循环
          this.iconMode = 'icon-liebiaoxunhuan1';
          break;
        case 2: // 随机播放
          this.iconMode = 'icon-suijibofang';
          break;
        default:
          break;
      }
    },

    ...mapMutations([
      'SET_NOW_INDEX',
      'SET_CURRENT_SONG',
      'SET_CURRENT_SONG_I',
      'SET_MUSIC_LIST',
      'CHANGE_NOW_INDEX',
      'CHANGE_IS_PLAY',
    ]),

    ...mapActions([
      'setNowIndex',
      'setCurrentSongId',
      'setCurrentSong',
      'setMusicList',
      'changeNowIndex',
      'chageIsPlay',
    ]),

    format(interval) {
      const h = Math.floor(interval);
      const minute = Math.floor(h / 60);

      let second = h % 60;
      if (second < 10) {
        second = `0${second}`;
      }

      return `${minute}:${second}`;
    },
    updateTime(e) {
      this.currentTime = e.target.currentTime;
      this.num = (this.currentTime / e.target.duration.toFixed(3)) * 100;
      if (e.target.ended === true && this.mode !== 'loop') {
        this.isStop = false;
        this.next();
      }
      if (e.target.paused === true) {
        this.isStop = false;
      } else {
        this.isStop = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-in-out;
  transform: translateX(40px);
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  transform: scale(1.5, 1.5);
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
@keyframes rotate-disk {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
#player {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  background: #000;
  overflow-y: auto;
  .disc {
    width: 100%;
    height: 70%;
    background: rgba(0, 0, 0, 0.3);
    position: relative;
    .one {
      margin: auto;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background: #000;
      border: 4px solid #333;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -2rem;
      margin-top: -2rem;
      animation: rotate-disk 20s infinite linear forwards;

      .two {
        height: 3.5rem;
        width: 3.5rem;
        background: #000;
        border: 1px solid #eee;
        position: absolute;
        border-radius: 50%;
        margin-top: 0.25rem;
        margin-left: 0.25rem;
        .three {
          height: 3rem;
          width: 3rem;
          background: #000;
          border: 1px solid #eee;
          position: absolute;
          border-radius: 50%;
          margin-top: 0.25rem;
          margin-left: 0.25rem;
          .four {
            height: 2.5rem;
            width: 2.5rem;
            background: green;
            position: absolute;
            border-radius: 50%;
            margin-top: 0.25rem;
            margin-left: 0.25rem;
            img {
              height: 2.5rem;
              width: 2.5rem;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
  .player-bar {
    // z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    margin-bottom: 0;
    background: #000;
    .palyer-msg {
      height: 1.5rem;
    }
    .progress-bar {
      height: 0.3rem;
      width: 100%;
      .progress-time {
        font-size: 12px;
        width: 15%;
        float: left;
        color: #fff;
      }
      .progress-center {
        float: left;
        width: 70%;
        .progress {
          margin-top: 0.1rem;
          height: 1px;
          position: relative;
          border-radius: 1px;
          background: #ffe;
          .progress-l {
            position: absolute;
            // width: 170px;
            left: 0;
            height: 100%;
            border-radius: inherit;
            background: red;
            .pivot {
              margin-top: -0.12rem;
              position: absolute;
              border-radius: 50%;
              right: 0;
              background: #fff;
              height: 0.25rem;
              width: 0.25rem;
              span {
                width: 3px;
                height: 3px;
                background: red;
                position: absolute;
                border-radius: 50%;
                top: 40%;
                right: 40%;
              }
            }
          }
        }
      }
      .progress-sumtime {
        width: 15%;
        text-align: center;
        font-size: 12px;
        float: left;
        color: #ffe;
      }
    }
    .palyer-type {
      height: 1.5rem;
      .icon-stop {
        font-size: 0.8rem;
      }
      .icon-play {
        font-size: 0.8rem;
      }
    }
  }
}
.iconfont {
  color: #fff;
  line-height: 1.5rem;
  font-size: 0.5rem;
}
.van-popup--bottom {
  height: 6rem;
  width: 100%;
}
</style>
