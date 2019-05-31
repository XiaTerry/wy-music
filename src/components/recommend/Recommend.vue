<template>
  <div class="recommend">
    <Vheader></Vheader>
    <!-- 轮播图 -->
    <Banner></Banner>
    <!-- 推荐 菜单 私人FM 每日推荐 歌单 排行榜 -->
    <Menu></Menu>
    <!-- 推荐歌单 -->
    <List></List>
    <!-- 最新音乐 -->
    <new-music></new-music>
    <!-- 电台 -->
    <Radio></Radio>
  </div>
</template>
<script>
import Vheader from '../v-header/V-header.vue';
import Menu from './Menu.vue';
import List from './List.vue';
import NewMusic from './NewMusic.vue';
import Radio from './Radio.vue';
import { getBanner } from '../../api/recommend';
import { ERR_OK } from '../../common/js/config';
import Banner from '../banner/Banner.vue';

export default {
  name: 'Recommend',
  components: {
    Vheader,
    Banner,
    Menu,
    List,
    NewMusic,
    Radio,
  },
  data() {
    return {
      banner: [],
    };
  },
  created() {
    this.getBanner();
  },
  mounted() {},
  methods: {
    /**
     * 获取推荐页面中轮播图数据
     */
    getBanner() {
      getBanner().then((res) => {
        if (res.status === ERR_OK) {
          const list = res.data.banners;
          this.banner = list;
        } else {
          console.error('Banner 获取失败');
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
  width: 100%;
  margin-top: 1.75rem;
  margin-bottom: 1rem;
  background: #fff;
}
</style>
