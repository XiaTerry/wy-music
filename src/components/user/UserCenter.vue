<template>
  <van-row>
    <v-touch>
      <transition name="slide-fade">
        <div class="user" v-if="isShowUser">
          <van-nav-bar title="账号" left-arrow @click-left="goBack" fixed>
            <template slot="left">
              <i class="iconfont icon-fanhui"></i>
              <span>返回</span>
            </template>
          </van-nav-bar>
          <div class="user-title" v-if="loginStatus">
            <h3>{{profile.nickname}}</h3>
            <img :src="profile.avatarUrl">
          </div>
          <van-row class="login-info" v-else>
            <p>登录网易云音乐</p>
            <p>手机电脑多端同步，尽享海量高品质音乐</p>
          </van-row>
          <div class="user-content">
            <van-row v-for="(item,index) in user" :key="index">
              <van-cell :title="item.name" is-link border title-class="user-content-name">
                <template slot="icon">
                  <i class="iconfont" :class="item.icon"></i>
                </template>
              </van-cell>
            </van-row>
          </div>
          <div class="user-bar">
            <ul>
              <li>
                <i class="iconfont icon-yejianmoshi"></i>
                夜间模式
              </li>
              <li>
                <i class="iconfont icon-shezhi"></i>
                设置
              </li>
              <li v-if="loginStatus" @click="handleLogout">
                <i class="iconfont icon-tuichu"></i>
                退出
              </li>
              <li v-else @click="showLoginPopup = true">
                <i class="iconfont icon-tuichu"></i>
                立即登录
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </v-touch>

    <login :showPopup="showLoginPopup" @close="showLoginPopup = false"></login>
  </van-row>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import Login from '../com-components/Login.vue';
import { logout } from '../../api/userInfo';

export default {
  components: {
    Login,
  },

  data() {
    return {
      showLoginPopup: false,
      user: [
        {
          name: '我的消息',
          icon: 'icon-xiaoxi',
        },
        {
          name: '会员中心',
          icon: 'icon-huiyuan',
        },
        {
          name: '商城',
          icon: 'icon-cart',
        },
        {
          name: '游戏推荐',
          icon: 'icon-huodong',
        },
        {
          name: '在线听歌免流量',
          icon: 'icon-tinggeshiqu',
        },
        {
          name: '我的好友',
          icon: 'icon-huiyuan1',
        },
        {
          name: '附近的人',
          icon: 'icon-fujinderen',
        },
        {
          name: '个性换肤',
          icon: 'icon-gexing',
        },
        {
          name: '听歌识曲',
          icon: 'icon-tinggeshiqu',
        },
        {
          name: '定时停止播放',
          icon: 'icon-dingshi',
        },
        {
          name: '扫一扫',
          icon: 'icon-tinggeshiqu',
        },
        {
          name: '音乐闹钟',
          icon: 'icon-tinggeshiqu',
        },
        {
          name: '驾驶模式',
          icon: 'icon-tinggeshiqu',
        },
        {
          name: '亲子频道',
          icon: 'icon-tinggeshiqu',
        },
        {
          name: '小冰电台',
          icon: 'icon-tinggeshiqu',
        },
        {
          name: '音乐云盘',
          icon: 'icon-tinggeshiqu',
        },
        {
          name: '优惠券',
          icon: 'icon-tinggeshiqu',
        },
        {
          name: '加入网易音乐人',
          icon: 'icon-liuyan',
        },
      ],
    };
  },

  computed: {
    ...mapGetters(['isShowUser', 'loginStatus', 'profile']),
  },

  methods: {
    goBack() {
      this.$router.go(-1);
      this.changeShowUser();
    },

    handleLogout() {
      logout().then((res) => {
        if (res.status === 200) {
          this.setLoginStatus(false);
        }
      });
    },

    ...mapMutations(['CHANGE_SHOW_USER', 'SET_LOGIN_STATUS']),

    ...mapActions(['changeShowUser', 'setLoginStatus']),
  },
};
</script>


<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
.slide-fade-enter-active {
  animation: bounce-in 1s;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  transform: scale(1.5, 1.5);
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.user {
  overflow-y: scroll;
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  .login-info {
    padding: 0.2rem;
    margin-top: 46px;
    p {
      padding: 0.1rem;
      font-size: 14px;
    }
  }
  &-title {
    margin-top: 46px;
    height: 2.5rem;
    width: 100%;
    background: #eee;
    h3 {
      text-align: left;
      padding: 0.2rem;
      float: left;
    }
    img {
      height: 2.5rem;
      float: left;
    }
  }
  &-content {
    background: #eee;
    &-name {
      text-align: left;
      margin-left: 0.2rem;
    }
  }
  &-bar {
    border-top: 1px solid #eee;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    height: 1rem;
    width: 100%;
    cursor: pointer;
    li {
      height: 1rem;
      float: left;
      line-height: 1rem;
      width: 33%;
    }
  }
}
</style>
