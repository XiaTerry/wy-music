import Vue from 'vue';
import Router from 'vue-router';

import Recommend from './components/recommend/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Recommend,
      children: [
        {
          path: '',
          name: 'recommend',
          component: () => import('./components/recommend/Recommend.vue'),
        },
        {
          path: 'songList',
          component: () => import('./components/music-list/songList/index.vue'),
          children: [
            {
              path: '',
              name: 'songList',
              component: () => import('./components/music-list/songList/SongList.vue'),
            },
            {
              path: 'listDetail',
              component: () => import('./components/music-list/songDetail/index.vue'),
              children: [
                {
                  path: '',
                  name: 'listDetail',
                  component: () => import('./components/music-list/songDetail/ListDetail.vue'),
                },
                {
                  path: 'player',
                  component: () => import('./components/player/index.vue'),
                  children: [
                    {
                      path: '',
                      name: 'player',
                      component: () => import('./components/player/Player.vue'),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      path: '/search',
      name: 'search',
      component: () => import('./components/search/Search.vue'),
    },
    {
      path: '/radio',
      name: 'radio',
      component: () => import('./components/radio/Radio.vue'),
    },
    {
      path: '/friend',
      name: 'friend',
      component: () => import('./components/friend/Friend.vue'),
    },

    {
      path: '/rankingList',
      name: 'rankingList',
      component: () => import('./components/rank-detail/RankingList.vue'),
    },

    {
      path: '/djcatelist',
      name: 'djcatelist',
      component: () => import('./components/radio/Djcatelist.vue'),
    },
  ],
});
