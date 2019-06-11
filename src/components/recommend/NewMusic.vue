<template>
  <van-row class="recommend-music" style="padding: 1%;">
    <h2>
      最新音乐
      <i class="iconfont icon-fanhui1"></i>
    </h2>

    <div v-for="item in newList" :key="item.id">
      <my-card :showPlayCount="false" :textDesc="item.name"></my-card>
    </div>
  </van-row>
</template>

<script>
import { getRecommendMusic } from '../../api/recommend';
import { ERR_OK } from '../../common/js/config';
import MyCard from '../com-components/MyCard.vue';

export default {
  components: {
    MyCard,
  },
  data() {
    return {
      newList: [],
      res: {
        picUrl:
          'http://p2.music.126.net/eZidSYwW1c8S7IDQjKRgBg==/109951163653489761.jpg',
        names: '束缚而返回随浮华第三',
        playCount: 43894893,
        name: '烦得很死肥卧佛范德萨范德萨范德萨发佛挡杀佛范发',
      },
      img:
        'http://p2.music.126.net/eZidSYwW1c8S7IDQjKRgBg==/109951163653489761.jpg',
    };
  },

  created() {
    this.getRecommendMusic();
  },

  methods: {
    // 获取最新音乐数据
    getRecommendMusic() {
      getRecommendMusic().then((res) => {
        if (res.status === ERR_OK) {
          this.newList = res.data.result.slice(0, 6);
        } else {
          console.error('最新音乐 获取失败');
        }
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
