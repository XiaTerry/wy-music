import * as types from './mutations-type'
// import { playMode } from '../common/js/config';
// import { shuffle } from '../common/js/utl';
export const selectPlay = function({commit},index){
    commit(types.SET_CURRENT_INDEX,index)
}
export const getMusicList= function({commit},list){
    commit(types.SET_MUSIC_LIST,list)
}