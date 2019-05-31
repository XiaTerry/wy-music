import * as types from './mutations-type';

const mutations = {
  [types.SET_CURRENT_INDEX](state, index) {
    state.nowIndex = index;
  },

  [types.SET_MUSIC_LIST](state, list) {
    state.musicList = list;
  },

  setCurrentId(state, id) {
    state.currentSongId = id;
  },

  getSongName(state, name) {
    state.songName = name;
  },

  getSinger(state, singer) {
    state.singer = singer;
  },

  getSongUrl(state, musicSrc) {
    state.musicSrc = musicSrc;
  },

  getImgSrc(state, imgSrc) {
    state.imgSrc = imgSrc;
  },

  [types.GET_SHOW_PLAYER](state, showPlayer) {
    state.showPlayer = showPlayer;
  },
};

export default mutations;
