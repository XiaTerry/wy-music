<template>
  <ul class="song-list">
    <li>
      <div class="name">
        <h4>列表循环({{musicList.length}})</h4>
      </div>
      <div class="operation">
        <h5>收藏全部</h5>
      </div>
    </li>
    <li v-for="item in musicList" :key="item.id">
      <div class="name">
        <p>{{item.name}}</p>-
        <span>{{item.author}}</span>
      </div>
      <div class="operation">
        <i class="iconfont icon-close"></i>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';

export default {
  computed: {
    musicList() {
      const myStorge = window.localStorage;
      const list = this.$store.getters.musicList;
      if (list.length === 0) {
        const lists = JSON.parse(myStorge.getItem('musicList'));
        this.setMusicList(lists);
      }
      return this.$store.getters.musicList;
    },
  },

  methods: {
    ...mapMutations(['SET_MUSIC_LIST']),

    ...mapActions(['setMusicList']),
  },
};
</script>


<style lang="scss" scoped>
.song-list {
  li {
    width: 100%;
    height: 1rem;
    box-sizing: border-box;
    padding: 0.2rem;
    border-bottom: 1px solid #eee;
  }
  .name {
    text-align: left;
    float: left;
    width: 75%;
    line-height: 0.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    p {
      float: left;
      font-size: 16px;
      color: #000;
    }
    span {
      font-size: 12px;
    }
  }
  .operation {
    text-align: left;
    float: right;
    line-height: 0.6rem;
  }
}
</style>
