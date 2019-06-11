<template>
  <van-row class="recommend-radio">
    <h2 @click="toRadio()">
      主播电台
      <i class="iconfont icon-fanhui1"></i>
    </h2>

    <div v-for="(item,index) in radioList" :key="index">
      <my-card
        :showPlayCount="false"
        :textDesc="item.name"
        :showDesc="true"
        :picUrl="item.picUrl"
        :imgDesc="item.copywriter"
      ></my-card>
    </div>
  </van-row>
</template>

<script>
import { getDjprogram } from '../../api/recommend';
import { ERR_OK } from '../../common/js/config';
import MyCard from '../com-components/MyCard.vue';

export default {
  components: {
    MyCard,
  },
  data() {
    return {
      radioList: [],
    };
  },

  created() {
    this.getDjprogram();
  },

  methods: {
    /**
     * 获取推荐电台数据
     */
    getDjprogram() {
      getDjprogram().then((res) => {
        if (res.status === ERR_OK) {
          this.radioList = res.data.result;
        } else {
          console.error('推荐电台 获取失败');
        }
      });
    },

    /**
     * 点击主播电台去到电台页面
     */
    toRadio() {
      this.$router.push({
        path: '/radio',
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
