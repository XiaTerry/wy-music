<template>
  <div class="radio">
    <Vheader></Vheader>
    <!-- 轮播图 -->
    <Banner></Banner>
    <!-- 分类 排行 电音 电台-->
    <van-row type="flex" justify="space-around" class="radio-menu">
      <van-col span="5">
        <div class="item">
          <i @click="goCatelist()" class="iconfont icon-icon-test1"></i>
        </div>电台分类
      </van-col>
      <van-col span="5">
        <div class="item">
          <i class="iconfont icon-paixing"></i>
        </div>电台排行
      </van-col>
      <van-col span="5">
        <div class="item">
          <i class="iconfont icon-gedan"></i>
        </div>DI电音
      </van-col>
      <van-col span="5">
        <div class="item">
          <i class="iconfont icon-paixing"></i>
        </div>小冰电台
      </van-col>
    </van-row>
    <div class="today-priority">
      <h2>今日优选</h2>
      <ul>
        <li class="today-priority-list" v-for="(item,index) in djList" :key="index">
          <div class="img">
            <img v-lazy="item.picUrl">
          </div>
          <div class="msg">
            <h2>{{item.name}}</h2>
            <p>节目:{{item.categoryId}}</p>
            <p>{{item.rcmdtext}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getDjprogram } from '../../api/radio';
import Banner from '../banner/Banner.vue';
import Vheader from '../v-header/V-header.vue';
import { ERR_OK } from '../../common/js/config';

export default {
  components: {
    Banner,
    Vheader,
  },
  created() {
    this.getDjprogram();
  },
  data() {
    return {
      images: [],
      djList: [],
      img:
        'http://p2.music.126.net/eZidSYwW1c8S7IDQjKRgBg==/109951163653489761.jpg',
    };
  },
  methods: {
    getDjprogram() {
      getDjprogram().then((res) => {
        if (res.status === ERR_OK) {
          this.djList = res.data.djRadios;
        } else {
          console.error('数据获取失败！');
        }
      });
    },

    goCatelist() {
      this.$router.push({
        path: '/djcatelist',
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
.radio {
  margin-top: 1.75rem;
}
.radio-menu {
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
.today-priority {
  margin-bottom: 1rem;
  > h2 {
    margin-top: 0.2rem;
    padding: 0.2rem;
    text-align: left;
    box-sizing: border-box;
    color: #000;
    font-size: $font-size-large;
    font-weight: 800;
  }
  &-list {
    margin-bottom: 0.1rem;
    height: 2rem;
    width: 100%;
    .img {
      width: 35%;
      height: 2rem;
      float: left;
      img {
        height: 2rem;
        border-radius: 0.1rem;
      }
    }
    .msg {
      width: 65%;
      height: 2rem;
      float: left;
      text-align: left;
      h2 {
        margin: 0.2rem 0;
        color: #000;
        font-size: $font-size-large;
        font-weight: 800;
      }
      p {
        padding: 0.1rem 0;
        font-size: $font-size-medium;
      }
    }
  }
}
</style>
