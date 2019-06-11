import {
  SET_NOW_INDEX,
  SET_CURRENT_SONG,
  SET_MUSIC_LIST,
  SET_CURRENT_SONG_ID,
  CHANGE_NOW_INDEX,
  SET_PLAYER_VISIBLE,
  CHANGE_IS_PLAY,
  CHANGE_SHOW_USER,
  SET_LOGIN_STATUS,
  SET_PORFILE,
  CHANGE_TAB,
} from './mutations-type';

const mutations = {
  [SET_NOW_INDEX](state, index) {
    state.nowIndex = index;
  },

  [SET_MUSIC_LIST](state, list) {
    state.musicList = list;
  },

  [SET_CURRENT_SONG](state, song) {
    state.currentSong = song;
  },

  [SET_CURRENT_SONG_ID](state, songId) {
    state.currentSongId = songId;
  },

  [CHANGE_NOW_INDEX](state, change) {
    change === 'prev' ? state.nowIndex-- : state.nowIndex++;
  },

  [SET_PLAYER_VISIBLE](state, visible) {
    state.playerVisible = visible;
  },

  [CHANGE_IS_PLAY](state) {
    state.isPlay = !state.isPlay;
  },

  [CHANGE_SHOW_USER](state) {
    state.isShowUser = !state.isShowUser;
  },

  [SET_LOGIN_STATUS](state, status) {
    state.loginStatus = status;
  },

  [SET_PORFILE](state, profile) {
    state.profile = profile;
  },

  [CHANGE_TAB](state, active) {
    state.tabActive = active;
  },
};

export default mutations;
