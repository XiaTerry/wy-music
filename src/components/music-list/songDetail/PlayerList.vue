<template>
  <van-row class="player-list">
    <ul>
      <li class="song-msg">
        <div class="icon">
          <i class="iconfont icon-stop" v-show="isPlayer" @click="player"></i>
          <i class="iconfont icon-play" v-show="isStop" @click="player"></i>
        </div>
        <div class="palyer-count">
          <h2>
            播放全部
            <span style="color:#999">(共{{playlist.trackCount}}首)</span>
          </h2>
        </div>
        <div class="collect">+收藏({{playlist.subscribedCount}})</div>
      </li>
      <li class="item-song" v-for="(item,index) in musicList" :key="item.id">
        <div class="number">{{index+1}}</div>

        <div class="song-name" @click="toPlayer(item.id,index)">
          <p>{{item.name}}</p>
          <p>{{item.author}}</p>
        </div>

        <div class="icon">
          <i class="iconfont icon-sandian"></i>
        </div>
      </li>
    </ul>
  </van-row>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'PlayerList',

  props: {
    playlist: { type: Object },
  },

  data() {
    return {
      isPlayer: true,
      isStop: false,
      visible: false,
    };
  },

  computed: {
    ...mapGetters(['musicList', 'playerVisible']),
  },

  methods: {
    player() {
      if (this.isStop === true) {
        this.isPlayer = true;
        this.isStop = false;
      } else {
        this.isStop = true;
        this.isPlayer = false;
      }
    },

    toPlayer(id, index) {
      this.setNowIndex(index);
      this.setCurrentSongId(id);
      this.chagePlayerVisible(true);
    },

    ...mapMutations([
      'SET_NOW_INDEX',
      'SET_CURRENT_SONG_ID',
      'SET_PLAYER_VISIBLE',
    ]),

    ...mapActions(['setNowIndex', 'setCurrentSongId', 'chagePlayerVisible']),
  },
};
</script>

<style lang="scss" scoped>
@import "../../../common/scss/variable.scss";
.player-list {
  width: 100%;
  border-radius: 0.2rem 0.2rem 0 0;
  background: #fff;
  .song-msg {
    border-bottom: 1px solid #eee;
    height: 1rem;
    width: 100%;
    border-radius: 0.2rem 0 0 0;
    .icon {
      width: 15%;
      height: 1rem;
      float: left;
      line-height: 1rem;
      .iconfont {
        font-size: 0.5rem;
      }
    }
    .palyer-count {
      box-sizing: border-box;
      height: 1rem;
      width: 50%;
      float: left;
      line-height: 1rem;
      text-align: left;
    }
    .collect {
      height: 1rem;
      width: 35%;
      float: left;
      line-height: 1rem;
      background: red;
      color: $color-text-l;
      font-size: $font-size-large;
      border-radius: 0 0.2rem 0 0;
    }
  }
  .item-song {
    height: 1rem;
    width: 100%;
    .number {
      float: left;
      width: 15%;
      height: 1rem;
      line-height: 1rem;
    }
    .song-name {
      width: 75%;
      float: left;
      height: 1rem;
      text-align: left;
      border-bottom: 1px solid #eee;
      p:nth-child(1) {
        padding: 0.15rem 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p:nth-child(2) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 12px;
      }
      .iconfont {
        float: right;
      }
    }
    .icon {
      width: 10%;
      height: 1rem;
      float: left;
      line-height: 1rem;
      font-size: 0.5rem;
    }
  }
}
</style>
