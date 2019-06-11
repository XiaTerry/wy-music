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

        {
          path: '/rankingList',
          component: () => import('./components/rank-detail/index.vue'),
          children: [
            {
              path: '',
              name: 'rankingList',
              component: () => import('./components/rank-detail/RankingList.vue'),
            },
          ],
        },

        {
          path: '/userInfo',
          component: () => import('./components/user/index.vue'),
          children: [
            {
              path: '',
              name: 'userInfo',
              component: () => import('./components/user/UserCenter.vue'),
            },
          ],
        },

        {
          path: '/search',
          component: () => import('./components/search/index.vue'),
          children: [
            {
              path: '',
              name: 'search',

              component: () => import('./components/search/Search.vue'),
            },
          ],
        },

        {
          path: '/radio',
          component: () => import('./components/radio/index.vue'),
          children: [
            {
              path: '',
              name: 'radio',
              component: () => import('./components/radio/Radio.vue'),
            },
          ],
        },

        {
          path: '/friend',
          component: () => import('./components/friend/index.vue'),
          children: [
            {
              path: '',
              name: 'friend',
              component: () => import('./components/friend/Friend.vue'),
            },
          ],
        },
      ],
    },

    {
      path: '/djcatelist',
      name: 'djcatelist',
      component: () => import('./components/radio/Djcatelist.vue'),
    },
  ],
});
