import Vue from 'vue';
import './registerServiceWorker';
import fastclick from 'fastclick';
import VueLazyload from 'vue-lazyload';
import './common/fonts/iconfont.css';
import './common/js/rem';
import Vant, { Loading } from 'vant';

// 引入vant
import store from './store';
import router from './router';
import App from './App.vue';
import 'vant/lib/index.css';

Vue.use(Vant);
// 使用vue-touch解决移动端滑动问题
const VueTouch = require('vue-touch');

Vue.use(VueTouch, { name: 'v-touch' });
// 使用vuex状态管理池
// Vue.use(Vuex)
Vue.use(Loading);
Vue.config.productionTip = false;
// 实现图片懒加载
fastclick.attach(document.body);
Vue.use(VueLazyload, {
  loading: require('./common/image/default.png'),
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
