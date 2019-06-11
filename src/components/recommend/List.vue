<template>
  <van-row class="recommend-list" style="padding: 1%;">
    <h2 @click="toAllList()">
      推荐歌单
      <i class="iconfont icon-fanhui1"></i>
    </h2>

    <div @click="selectSong(item.id)" v-for="item in recommendList" :key="item.id">
      <my-card
        :playCount="item.playCount"
        :textDesc="item.name"
        :showDesc="false"
        :picUrl="item.picUrl"
      ></my-card>
    </div>
  </van-row>
</template>

<script>
import { getRecommendList } from '../../api/recommend';
import { ERR_OK } from '../../common/js/config';
import MyCard from '../com-components/MyCard.vue';

export default {
  components: {
    MyCard,
  },
  data() {
    return {
      recommendList: [],
    };
  },

  created() {
    this.getRecommendList();
  },

  methods: {
    /**
     * 获取推荐歌曲数据
     */
    getRecommendList() {
      getRecommendList().then((res) => {
        if (res.status === ERR_OK) {
          this.songList = res.data;
          this.recommendList = res.data.result.slice(0, 6);
        } else {
          console.error('推荐歌曲 获取失败');
        }
      });
    },

    /**
     * 点击推荐歌单去歌单页面
     */
    toAllList() {
      this.$router.push({
        path: '/songList',
      });
    },

    /**
     * 点击获取详情推荐歌单列表
     */
    selectSong(id) {
      this.$router.push({
        path: 'songList/listDetail',
        query: {
          id,
        },
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
}
</style>
