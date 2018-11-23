import Vue from 'vue';
import Router from 'vue-router';

import Recommend from "./components/recommend/Recommend.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'reommend',
      component: Recommend,
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./components/search/Search.vue')
    },
    {
      path: '/radio',
      name: 'radio',
      component: () => import( './components/radio/Radio.vue'),
    },
    {
      path: '/friend',
      name: 'friend',
      component: () => import( './components/friend/Friend.vue'),
    },
    {
      path: '/songList',
      name: 'songList',
      component: ()=> import('./components/music-list/SongList.vue'),
    },
    {
      path: '/listDetail/:id',
      name: 'listDetail',
      component: ()=> import('./components/music-list/ListDetail.vue')
    },
    {
      path: '/rankingList',
      name: 'rankingList',
      component: ()=> import('./components/rank-detail/RankingList.vue')
    },
    {
      path: '/player',
      name: 'player',
      component: ()=> import('./components/player/Player.vue')
    },
    {
      path: '/djcatelist',
      name: 'djcatelist',
      component: () => import('./components/radio/Djcatelist.vue')
    }
  ],
});
