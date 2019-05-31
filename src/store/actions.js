import * as types from './mutations-type';

export const selectPlay = function ({ commit }, index) {
  commit(types.SET_CURRENT_INDEX, index);
};
export const getMusicList = function ({ commit }, list) {
  commit(types.SET_MUSIC_LIST, list);
};
export const getShowPlayer = function ({ commit }, showPlayer) {
  commit(types.GET_SHOW_PLAYER, showPlayer);
};
