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

const actions = {
  changeShowUser: ({ commit }) => {
    commit(CHANGE_SHOW_USER);
  },

  setNowIndex: ({ commit }, index) => {
    commit(SET_NOW_INDEX, index);
  },
  setLoginStatus: ({ commit }, status) => {
    commit(SET_LOGIN_STATUS, status);
  },

  setMusicList: ({ commit }, list) => {
    commit(SET_MUSIC_LIST, list);
  },

  setCurrentSongId: ({ commit }, songId) => {
    commit(SET_CURRENT_SONG_ID, songId);
  },

  setCurrentSong: ({ commit }, song) => {
    commit(SET_CURRENT_SONG, song);
  },

  changeNowIndex: ({ commit }, nowIndex) => {
    commit(CHANGE_NOW_INDEX, nowIndex);
  },

  chagePlayerVisible: ({ commit }, visible) => {
    commit(SET_PLAYER_VISIBLE, visible);
  },

  chageIsPlay: ({ commit }) => {
    commit(CHANGE_IS_PLAY);
  },

  setProfile: ({ commit }, profile) => {
    commit(SET_PORFILE, profile);
  },

  changeTabActive: ({ commit }, active) => {
    commit(CHANGE_TAB, active);
  },
};

export default actions;
