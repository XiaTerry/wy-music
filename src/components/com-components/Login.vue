<template>
  <div>
    <van-popup v-model="showLoginPopup" position="bottom" class="login-dialog">
      <van-nav-bar left-arrow @click-left="$emit('close')" :border="false">
        <template slot="left">
          <van-icon name="cross" color="#000"/>
        </template>
      </van-nav-bar>
      <van-row>
        <van-row class="login-logo">
          <i class="iconfont icon-wy" style="font-size:100px"></i>
        </van-row>
        <van-button
          type="default"
          @click="showLogin = true"
          round
          style="padding: 0 60px;color:#E3150D;"
        >手机号登录</van-button>
        <van-row class="more-login-logo">
          <van-col span="8">
            <i class="iconfont icon-weixin"></i>
          </van-col>
          <van-col span="8">
            <i class="iconfont icon-qq"></i>
          </van-col>
          <van-col span="8">
            <i class="iconfont icon-weibo"></i>
          </van-col>
        </van-row>

        <van-row class="user-treaty">
          <van-icon name="circle" v-show="!agree" @click="handelAgree"/>
          <van-icon name="certificate" v-show="agree" @click="handelAgree"/>同意
          <a>《服务条款》</a>
          和
          <a>《隐私政策》</a>
        </van-row>
      </van-row>
    </van-popup>

    <van-popup v-model="showLogin" position="right" class="login-popup">
      <van-nav-bar left-arrow title="手机号登录" @click-left="showLogin = false" :border="false">
        <template slot="left">
          <i class="iconfont icon-fanhui"></i>
        </template>
      </van-nav-bar>

      <van-row class="login-input">
        <p>未注册手机号登录后将自动创建账号</p>

        <van-cell-group>
          <van-field
            v-model="phoneNumber"
            :clearable="true"
            :border="false"
            label="+86"
            placeholder="请输入手机号"
          ></van-field>
        </van-cell-group>

        <van-button
          type="default"
          @click="handleNextStep"
          round
          :disabled="phoneDisabled"
          size="large"
          style="margin-top:1rem;background:#E3150D;color:#fff"
        >下一步</van-button>
      </van-row>
    </van-popup>

    <van-popup v-model="showPsPopup" position="right" class="login-popup">
      <van-nav-bar left-arrow title="手机号登录" @click-left="showPsPopup = false" :border="false">
        <template slot="left">
          <i class="iconfont icon-fanhui"></i>
        </template>
      </van-nav-bar>

      <van-row class="login-input">
        <van-cell-group>
          <van-field
            v-model="password"
            :clearable="true"
            :border="false"
            type="password"
            placeholder="输入密码"
          ></van-field>
        </van-cell-group>

        <van-button
          type="default"
          @click="handleLogin"
          :disabled="psDisabled"
          round
          size="large"
          style="margin-top:1rem;background:#E3150D;color:#fff"
        >立即登录</van-button>
      </van-row>
    </van-popup>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex';
import { loginByPhone } from '../../api/userInfo';
import { ERR_OK } from '../../common/js/config';

export default {
  props: ['showPopup'],

  data() {
    return {
      showLogin: false,
      agree: true,
      phoneNumber: '',
      password: '',
      showPsPopup: false,
      showLoginPopup: this.showPopup,
    };
  },

  watch: {
    showPopup(val) {
      this.showLoginPopup = val;
    },
  },

  computed: {
    ...mapGetters(['isShowUser', 'loginStatus', 'profile']),
    phoneDisabled() {
      return !this.phoneNumber;
    },

    psDisabled() {
      return !this.password;
    },
  },

  mounted() {
    const myStroge = window.localStorage;
    if (myStroge.getItem('profile')) {
      const profile = JSON.parse(myStroge.getItem('profile'));
      this.setProfile(profile);
      this.setLoginStatus(true);
    } else {
      this.setLoginStatus(false);
    }
  },

  methods: {
    handleLogin() {
      loginByPhone(this.phoneNumber, this.password).then((res) => {
        if (res.status === ERR_OK) {
          this.setMyProfile(res);
          this.setLoginStatus(true);
          this.changeShowUser();
          this.$router.push({
            path: '/',
          });
        } else {
          this.$toast('登录失败！');
          this.setLoginStatus(false);
        }
      });
    },

    setMyProfile(res) {
      const myStroge = window.localStorage;
      this.setProfile(res.data.profile);
      myStroge.setItem('profile', JSON.stringify(this.profile));
    },

    checkPhone(val) {
      if (!/^1[3456789]\d{9}$/.test(val)) {
        this.$toast('手机号码有误，请重填');
        return false;
      }
      return true;
    },

    handelAgree() {
      this.agree = !this.agree;
    },
    /**
     * 点击下一步验证手机号通过则跳到打开输入密码Popup
     */
    handleNextStep() {
      if (this.checkPhone(this.phoneNumber)) {
        this.showPsPopup = true;
      }
    },

    ...mapMutations(['CHANGE_SHOW_USER', 'SET_LOGIN_STATUS', 'SET_PORFILE']),

    ...mapActions(['changeShowUser', 'setLoginStatus', 'setProfile']),
  },
};
</script>

<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
.login-dialog {
  background: $color-theme;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  color: #fff;
  .van-nav-bar {
    background: $color-theme;
    color: #999;
  }
}
.login-logo {
  margin: 2rem 0 2.5rem;
}

.more-login-logo {
  padding: 1rem;
  i {
    font-size: 20px;
  }
}

.login-popup {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.login-input {
  text-align: left;
  padding: 0.2rem;
  p {
    font-size: 14px;
    padding: 0.2rem;
  }
}

.user-treaty {
  a {
    font-size: 12px;
  }
  font-size: 12px;
}
</style>
