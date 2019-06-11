<template>
  <van-row class="v-header">
    <!-- 顶部导航 -->
    <van-row type="flex" justify="space-between">
      <van-col span="4" class="header-icon">
        <router-link to="/userInfo">
          <i class="iconfont icon-caidan" @click="changeShowUser"></i>
        </router-link>
      </van-col>
      <van-col span="2" class="header-icon">
        <router-link to="/music">
          <i class="iconfont icon-yinyue"></i>
        </router-link>
      </van-col>
      <van-col span="2" class="header-icon">
        <router-link to="/wy">
          <i class="iconfont icon-wy"></i>
        </router-link>
      </van-col>
      <van-col span="2" class="header-icon">
        <router-link to="/radio">
          <i class="iconfont icon-shipin"></i>
        </router-link>
      </van-col>
      <van-col span="4" class="header-icon">
        <router-link to="/search" class="search" tag="div">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </van-col>
    </van-row>

    <!-- 顶部三导航 推荐 朋友 电台 -->
    <van-tabs
      v-model="tabActive"
      background="#E3150D"
      color="#fff"
      title-inactive-color="#ffffffa8"
      title-active-color="#fff"
      @click="onClick"
    >
      <van-tab title="推荐"></van-tab>
      <van-tab title="朋友"></van-tab>
      <van-tab title="电台"></van-tab>
    </van-tabs>
  </van-row>
</template>


<script>
import { mapMutations, mapActions } from 'vuex';

export default {
  components: {},
  data() {
    return {
      active: 0,
      routerMap: {
        0: '/',
        1: '/friend',
        2: '/radio',
      },
    };
  },

  computed: {
    tabActive: {
      get() {
        return this.$store.getters.tabActive;
      },
      set(val) {
        return this.$store.commit('CHANGE_TAB', val);
      },
    },
  },

  methods: {
    ...mapMutations(['CHANGE_SHOW_USER', 'CHANGE_TAB']),

    ...mapActions(['changeShowUser', 'changeTabActive']),

    onClick(index) {
      this.$router.push({
        path: `${this.routerMap[index]}`,
      });
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
.van-hairline--top-bottom::after {
  border-width: 0 !important;
}
.v-header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 1.8rem;
  z-index: 1;
  text-align: center;
  background: $color-theme;
  margin-bottom: 1.8rem;
  .text {
    line-height: 44px;
    font-weight: bold;
    color: $color-text-l;
    letter-spacing: 3px;
  }
  .header-icon {
    padding: 0.2rem;
    .iconfont {
      color: #ffffffa8;
      font-size: 0.5rem;
    }
  }
  .mine {
    position: absolute;
    top: -1.5px;
    left: 0;
    .iconfont {
      display: block;
      padding: 0.2rem;
      font-size: 0.5rem;
      color: $color-theme-l;
    }
  }
  .search {
    position: absolute;
    top: 0;
    right: 2px;
    .iconfont {
      display: block;
      padding: 0.2rem;
      font-size: 0.5rem;
      color: $color-theme-l;
    }
  }
}
</style>
