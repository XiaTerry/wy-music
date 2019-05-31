<template>
  <van-row type="flex" justify="space-around" class="recommend-menu">
    <van-col span="5">
      <div class="item">
        <i class="iconfont icon-ttpodicon"></i>
      </div>私人FM
    </van-col>
    <van-col span="5">
      <div class="item">
        <i class="iconfont icon-rili1">
          <span>{{date}}</span>
        </i>
      </div>每日推荐
    </van-col>
    <van-col span="5">
      <div class="item" @click="toAllList()">
        <i class="iconfont icon-gedan"></i>
      </div>歌单
    </van-col>
    <van-col span="5">
      <div class="item" @click="toRankingList()">
        <i class="iconfont icon-paixing"></i>
      </div>排行榜
    </van-col>
  </van-row>
</template>

<script>
export default {
  data() {
    return {
      date: null,
    };
  },
  mounted() {
    this.getDate();
  },

  methods: {
    /**
     * 获取当前时间的号数
     */
    getDate() {
      const nowDtate = new Date();

      if (nowDtate.getDate() <= 9) {
        this.date = nowDtate.getDate();
      } else {
        this.date = nowDtate.getDate();
      }
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
     * 点击去到排行榜
     */
    toRankingList() {
      this.$router.push({
        path: '/rankingList',
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
$con: "06";
.recommend {
  &-menu {
    text-align: center;
    height: 1.8rem;
    border-bottom: 1px solid #eee;
    padding-top: 0.3rem;
    a {
      color: #000;
    }
    .item {
      line-height: 1rem;
      margin-left: 0.15rem;
      width: 1rem;
      height: 1rem;
      background: $color-theme;
      box-shadow: 0.1rem 0.1rem 0.5rem rgba(255, 0, 0, 0.3);
      margin-bottom: 0.15rem;
      border-radius: 50%;
      .iconfont {
        font-size: 0.5rem;
        color: #ffe;
      }
      .icon-rili1 {
        position: relative;
      }
      .icon-rili1 {
        position: relative;
        span {
          position: absolute;
          bottom: -0.3rem;
          right: 0.1rem;
        }
      }
    }
  }
}
</style>
