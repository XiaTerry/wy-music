<template>
  <van-row
    class="list-detail"
    :style="{background:'url('+playlist.coverImgUrl+') no-repeat center/cover'}"
  >
    <NavBar></NavBar>
    <subscrib :playlist="playlist" :creator="creator"></subscrib>
    <player-list :playlist="playlist"></player-list>
  </van-row>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
import NavBar from '../../v-header/NavBar.vue';
import Subscrib from './Subscrib.vue';
import PlayerList from './PlayerList.vue';
import { getRecommendListDetail } from '../../../api/recommend';

export default {
  name: 'ListDetail',

  components: {
    NavBar,
    Subscrib,
    PlayerList,
  },

  data() {
    return {
      nowId: this.$route.query.id,
      playlist: {},
      creator: {},
    };
  },

  created() {
    this.getRecommendListDetail();
  },

  methods: {
    /**
     * 获取推荐列表详情
     */
    getRecommendListDetail() {
      const id = this.nowId;
      const myStorage = window.localStorage;
      let musicMap = [];
      if (id) {
        getRecommendListDetail(id).then((res) => {
          this.playlist = res.data.playlist;
          this.creator = res.data.playlist.creator;
          musicMap = res.data.playlist.tracks.map(item => ({
            id: item.id,
            name: item.name,
            author: item.ar[0].name,
          }));
          this.setMusicList(musicMap);
          myStorage.setItem('musicList', JSON.stringify(musicMap));
        });
      }
    },

    ...mapMutations(['SET_MUSIC_LIST']),

    ...mapActions(['setMusicList']),
  },
};
</script>

<style lang="scss" scoped>
.list-detail {
  margin-top: 1rem;
  margin-bottom: 1.4rem;
}
</style>
