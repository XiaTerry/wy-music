<template>
  <van-row>
    <van-row class="rank-list">
      <NavBar></NavBar>
      <div class="title">
        <h1>官方榜</h1>
      </div>
      <ul class="rank-content">
        <!--  v-for="(item,index) in rankList" :key="index" v-lazy="item.playlist.coverImgUrl"-->
        <li class="list" @click="selectSong(item.id)" v-for="(item,index) in rankList" :key="index">
          <div class="list-left">
            <img v-lazy="item.coverImgUrl">
          </div>
          <div class="list-right">
            <ul>
              <li
                class="name"
                v-for="(item,index) in item.tracks"
                :key="item.id"
              >{{index+1}}.{{item.first}}</li>
            </ul>
          </div>
        </li>
      </ul>
    </van-row>
    <van-row class="recommend-bang-list">
      <div class="title">
        <h1>推荐榜</h1>
      </div>
      <van-row>
        <div
          class="list-item"
          @click="selectSong(item.id)"
          v-for="(item,index) in recommendBangList"
          :key="index"
        >
          <img v-lazy="item.coverImgUrl">
          <div class="updateTime">{{item.updateFrequency}}</div>
          <div class="name">{{item.name}}</div>
        </div>
      </van-row>
    </van-row>

    <van-row class="recommend-bang-list whole-nation">
      <div class="title">
        <h1>全球榜</h1>
      </div>
      <van-row>
        <div
          class="list-item"
          @click="selectSong(item.id)"
          v-for="(item,index) in wholeNationList"
          :key="index"
        >
          <img v-lazy="item.coverImgUrl">
          <div class="updateTime">{{item.updateFrequency}}</div>
          <div class="name">{{item.name}}</div>
        </div>
      </van-row>
    </van-row>

    <van-row class="recommend-bang-list more">
      <div class="title">
        <h1>更多榜单</h1>
      </div>
      <van-row>
        <div
          class="list-item"
          @click="selectSong(item.id)"
          v-for="(item,index) in moreList"
          :key="index"
        >
          <img v-lazy="item.coverImgUrl">
          <div class="updateTime">{{item.updateFrequency}}</div>
          <div class="name">{{item.name}}</div>
        </div>
      </van-row>
    </van-row>
  </van-row>
</template>

<script>
import { ERR_OK } from '../../common/js/config';
import { getRankDetail } from '../../api/rankingList';
// import PlayerBar from "../player/PlayerBar.vue";
import NavBar from '../v-header/NavBar.vue';

export default {
  name: 'rankingList',
  components: {
    // PlayerBar,
    NavBar,
  },
  data() {
    return {
      rankList: [],
      rankTracks: [],
      recommendBangList: [],
      wholeNationList: [],
      moreList: [],
    };
  },
  mounted() {
    this.getRankDetail();
  },
  methods: {
    selectSong(id) {
      this.$router.push({
        path: '/songList/listDetail',
        query: {
          id,
        },
      });
    },
    getRankDetail() {
      getRankDetail().then((res) => {
        if (res.status === ERR_OK) {
          this.rankList = res.data.list.slice(0, 4);
          this.recommendBangList = res.data.list.slice(4, 10);
          this.wholeNationList = res.data.list.slice(10, 16);
          this.moreList = res.data.list.slice(16, -1);
        } else {
          console.error('获取失败！');
        }
      });
    },
    getWorldSong() {},
  },
};
</script>


<style lang="scss" scoped>
.rank-list {
  width: 100%;
  margin-top: 1rem;
  .title {
    width: 100%;
    height: 1rem;
    padding: 0 0.2rem;
    box-sizing: border-box;
    h1 {
      float: left;
      font-size: 20px;
      font-weight: 600;
      line-height: 1rem;
    }
  }

  .list {
    height: 2rem;
    width: 100%;
    .list-left {
      height: 2rem;
      width: 40%;
      float: left;
      // background: #ff0;
      img {
        width: 100%;
        padding: 0.1rem;
        box-sizing: border-box;
        border-radius: 0.2rem;
        height: 2rem;
      }
    }
    .list-right {
      width: 60%;
      height: 2rem;
      border-bottom: 1px solid #eee;
      float: left;
      padding: 0.3rem 0 0 0;
      box-sizing: border-box;
      .name {
        width: 100%;
        height: 0.5rem;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
.recommend-bang-list {
  .title {
    width: 100%;
    height: 1rem;
    padding: 0 0.2rem;
    box-sizing: border-box;
    h1 {
      float: left;
      font-size: 20px;
      font-weight: 600;
      line-height: 1rem;
    }
  }
  .list-item {
    height: 2.2rem;
    width: 33.3%;
    margin-bottom: 0.5rem;
    float: left;
    position: relative;
    .updateTime {
      position: absolute;
      margin-left: 0.2rem;
      background: rgba(0, 0, 0, 0.4);
      bottom: 0.5rem;
      font-size: 12px;
      color: #fff;
      text-align: left;
    }
    .name {
      text-align: left;
      padding: 0.1rem;
    }
    img {
      width: 100%;
      padding: 0.1rem;
      box-sizing: border-box;
      border-radius: 0.2rem;
      height: 2rem;
    }
  }
}

.whole-nation {
}

.more {
  margin-bottom: 1rem;
}
</style>
