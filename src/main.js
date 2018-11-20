import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import fastclick from 'fastclick';
import VueLazyload from 'vue-lazyload';
import './common/fonts/iconfont.css';
import store from './store'
import './common/js/rem.js';
import { Loading } from 'vant';

//引入vant
import Vant from 'vant';
import 'vant/lib/index.css'
Vue.use(Vant)
//使用vuex状态管理池
// Vue.use(Vuex)
Vue.use(Loading);
Vue.config.productionTip = false;
//实现图片懒加载
fastclick.attach(document.body)
Vue.use(VueLazyload,{
  loading:require('./common/image/default.png')
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
